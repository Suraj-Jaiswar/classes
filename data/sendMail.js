const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    },
    tls: { rejectUnauthorized: false}
})

async function sendEmail(to, subject, message){
    await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to,
        subject,
        html: message
    })
}

async function sendEnquiryEmail(to, body) {
      const subject = "Tuition Enquiry";
      let table = `
      <table border='1' style='border-collapse:collapse'>
     <tr>
        <th>
            Name
        </th>
        <th>
            Email
        </th>
        <th>
            Phone
        </th>
        <th>
            Message
        </th>
     </tr>
     <tr>
         <td style='text-transform: capitalize'>
          ${body.first_name} ${body.last_name}
         </td>
         <td style='text-transform: capitalize'>
          ${body.email}
         </td>
         <td style='text-transform: capitalize'>
          ${body.contact}
         </td>
        <td style='text-transform: capitalize'>
         ${body.message}
        </td>
     </tr>
    </table>
      `;
     
     return await sendEmail(
        to,
        subject,
        `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>${subject}</title>
              <style>
                td
                {border-left:1px solid black;
                border-top:1px solid black;}
                table
                {border-right:1px solid black;
                border-bottom:1px solid black;}
                </style>
            </head>
            <body>
              <p>Tuition Enquiry.</p>
              ${table}
            </body>
          </html>
          `
    )
}
module.exports = {
    sendEnquiryEmail,
    sendEmail
}