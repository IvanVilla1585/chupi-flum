// @flow
const sgMail = require('@sendgrid/mail');

class Email {
	constructor(SENDGRID_API_KEY = ''){
			this.ID_CONFIRM_PASSWORD = '93c255ef-bef5-435c-b9c3-cdd50bdfa028';
			console.log('api key', SENDGRID_API_KEY)
			sgMail.setApiKey(SENDGRID_API_KEY);
			sgMail.setSubstitutionWrappers('{{', '}}');
	}
	confirmInscription(to, from, data){
		const msg = {
				to: to,
				from: from,
				subject: 'Inscripcion Refrescos Chupi Flum',
				templateId: this.ID_CONFIRM_PASSWORD,
				substitutions: {
					name: data.name,
					url: data.url
				}
			};
			sgMail.send(msg)
	}
}

module.exports.Email = Email;
