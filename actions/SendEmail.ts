"use server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail =(formData : FormData)=> {
    console.log("Running on server")
    console.log(formData.get("senderEmail"))
    console.log(formData.get("message"))
  }