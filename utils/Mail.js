require("dotenv").config();
const nodemailer = require("nodemailer");

class Mail {
  constructor() {
    this.transporter = nodemailer.createTransport({
      port: process.env.EMAIL_PORT,
      host: process.env.EMAIL_SMTP,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });
  }

  async sendEmail(to, subject, html) {
    let data = {
      from: "francis@targanski.com",
      to: "francis@targanski.com",
      subject: "Assunto teste",
      html: "<h1>Teste corpo HTML</h1>",
    };

    try {
      const result = await this.transporter.sendMail(data);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Mail;
