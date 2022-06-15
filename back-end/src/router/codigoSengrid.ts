import express, { Request, Response } from "express";
import templateIds from '../constants/templateid.const';
import templateid1Const from "../constants/templateid1.const";
import generatecode from '../utilities/generarcodigo';
import sendEmail from '../utilities/sendgrid';
export const codigoRouter =express.Router();

codigoRouter.use(express.json());


codigoRouter.post('/codigo',async (req: Request, res: Response) => {
  try{
 
        
   const {name, email,password}=req.body  
   console.log(name,email,password);
   const codigo = generatecode();
    await sendEmail(
      email,
      {
        subject: 'Validate email',
        name,
        codigo
      },
      templateIds.SEND_CODE
    )
    res.status(200).send('Mail send')
  }
  catch(error){
      res.status(500).send("error")

  }
})

codigoRouter.post('/codigo/CHECKIN',async (req: Request, res: Response) => {
    try{
   
     const {name, email,password}=req.body  
     console.log(name,email,password);
      await sendEmail(
        email,
        {
          subject: 'Validate email',
          name
        },
        templateid1Const.SEND_CHECKIN
      )
      res.status(200).send('Mail send')
    }
    catch(error){
        res.status(500).send("error")

    }
})

// codigoRouter.post('/codigo/CheckOut',async (req: Request, res: Response) => {
//   try{
 
//    const {name, email,password}=req.body  
//    console.log(name,email,password);
//     await sendEmail(
//       email,
//       {
//         subject: 'Validate email',
//         name
//       },
//       templateid2Const.SEND_CheckOut
//     )
//     res.status(200).send('Mail send')
//   }
//   catch(error){
//       res.status(500).send("error")

//   }
// })
