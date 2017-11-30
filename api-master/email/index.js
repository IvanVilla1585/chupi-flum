// @flow
const sgMail = require('@sendgrid/mail');

class Email {
    constructor(SENDGRID_API_KEY = ''){
        this.ID_RESET_TEMPLATE = '1e1d8fc3-67ea-4b3f-8180-8873efe1d3af';
        this.ID_INVITE_TEMPLATE = '10988e08-57d0-4127-a312-80ada0d4cf79';
        this.ID_LICENSE_TEMPLATE = '79a1835e-2d94-45aa-8342-c237e4e57d88';
        sgMail.setApiKey(SENDGRID_API_KEY);
        sgMail.setSubstitutionWrappers('{{', '}}');
      }
      resetPassword(to, from, data){
        const msg = {
            to: to,
            from: from,
            subject: 'reset password Docubot',
            templateId: this.ID_RESET_TEMPLATE,
            substitutions: {
              team: data.team,
              email: data.email,
              name: data.name,
              password: data.randomPassword
            }
          }
          sgMail.send(msg)
      }
      license(to, from, data, res){
        const msg = {
            to: to,
            from: from,
            subject: 'Welcome to Docubot',
            templateId: this.ID_LICENSE_TEMPLATE,
            substitutions: {
              email: data.email,
              password: data.password,
            }
          }
          sgMail.send(msg)
      }
      invite(to, from, password, data) {
        const msg = {
          to: to,
          from: from,
          subject: 'Docubot invitacion',
          templateId: this.ID_INVITE_TEMPLATE,
          substitutions: {
            email: data.email,
            name: data.name,
            password: password
          }
        }
        sgMail.send(msg)
      }
}

export default Email;
