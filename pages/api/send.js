// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendEnquiryEmail } from "../../data/sendMail";

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  try{
      let {body} = req;
      body = JSON.parse(body);
      let toEmail = 'katalystacademy555@gmail.com';
      sendEnquiryEmail(toEmail,body)
      .then(result =>{
          res.status(200).json({ 
            msg: 'Send Enquiry Successful!!!', 
            status : 200, 
            msgType: 'success' 
          });
      })
      .catch(err =>{
          res.status(500).json({error : err, status : 500})
      })
  }catch(error){
    res.status(500).json({error : err, status : 500})
  }
}
