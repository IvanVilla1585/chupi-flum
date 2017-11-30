'use stict'
const jwt = require('jsonwebtoken');
const path = require('path');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const passport = require('passport');
const passportJWT = require('passport-jwt');

const db = require('./lib/db');
const config = require('./config');

mongoose.Promise = Promise;

class SetupAuth {
  constructor(app){
    this.app = app;
    //this.sendMail = new Mail(config.sendGridApiKey);
    this.configureApp();
  }

  configureApp() {
    this.configureStrategy();
    this.configureRoutes();
  }

  async connectionBD(){
    const options = {useMongoClient: true};
    const connection = await mongoose.createConnection(config.db, options);

    // Expose user model
    return connection.model('User');
  }

  async configureStrategy(){
    let connection = await this.connectionBD();
    let ExtractJwt = passportJWT.ExtractJwt;
    let Strategy = passportJWT.Strategy;
    let params = {
      secretOrKey: config.secretToken,
      jwtFromRequest: ExtractJwt.fromAuthHeader()
    };

    let strategy = new Strategy(params, async (payload, done) => {

      console.log(payload)

      const valid_user = await connection.findOne({email: payload.email});
      connection.close();
      if (valid_user) {
        return done(null, valid_user);
      } else {
        return done(null, false);
      }
    });
    passport.use(strategy);
    this.app.use(passport.initialize())
  }

  configureRoutes() {

    // login user
    this.app.post('/login', db( async (req, res, next) => {
      const {email, password} = req.body;
      const {Model} = req;
      //search user
      Model.findOne({ email }).then((user) => {
        //compare passwords
        user.comparePassword(password, (err, isMatch) => {
          //server error
          if (err) return res.status(500).send("internal server error");

          if (!isMatch) return res.status(404).send("invalid password");

          //create token
          const token = jwt.sign({ email: user.email }, config.jwtSecret)

          //send token and message
          return res.status(200).send({
            message: "login",
            user: {
              id: user._id,
              name: user.name,
              lastName: user.lastName,
              email: user.email,
              type: user.type,
              status: user.status
            },
            token
          })
        })
      })
    }));

    this.app.post('/register', db(async (req, res, next) => {
      const {email, name, lastName, type, rol} = req.body;
      const {Model} = req;
      try{
        const user = await new Model({name, lastName, email, rol, type}).save();

        res.json(user);

      }catch (e) {
        res.json(e);

      }
    }));

    this.app.post('/update-password/:token', async(req, res) => {
      const {Model} = req;
      const {email, oldPassword, newPassword } = req.body;
      try{
        const user = await Model.findOne({email});
        if(!user) res.status(404).send({message: "user not found"});
        user.comparePassword(oldPassword, (err, isMatch) => {
          if(!isMatch){
            res.status(403).send({message: 'incorrect oldPassword'})
          }else{
            user.password = newPassword;
            user.changePassword = true;
            user.save().then(() => {
              res.status(200).send({message: 'change password ok'})
            })
          }
        })
      }catch(error){
        res.status(500).send({message: "internal server error"})
      }
    })

    this.app.post('/reset-password', async(req, res) => {
      // const {email} = req.body;
      // const {Model} = req;
      //
      // const user = await Model.find({email});
      //
      // if (user){
      //   const token = jwt.sign({email: user.email}, config.secretToken, {expiresIn: 3600});
      //   const url = `http:localhost:4200/reset-password/${token}`;
      //   //this.sendMail.sendEmailUpdatePassword(user.email, `${user.firstName} ${user.lastName}`, res, next);
      // }
      // res.statusCode = 400;
      // res.statusMessage = httpStatus[400];
      // res.end();
      const { email } = req.body;

      const user = await User.findOne({email})

      if(!user) res.status(404).send({message: 'user not found'})

      const randomPassword = user.generateRandomPassword();
      user.changePassword = false;
      user.save().then(() => {
        sendGrid.resetPassword(email, 'noreply@docuflux.com', {
          email,
          randomPassword
        })
        res.status(200).send({message: 'ok'})
      }).catch((err)=>{
        res.status(500).send({message: 'internal error'})
      })
    });
  }
}

exports.SetupAuth = SetupAuth;
