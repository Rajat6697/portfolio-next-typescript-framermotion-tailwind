"use server"
import { getErrorMessage, validateString } from "@/lib/utils"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)



export const sendEmail = async (formData : FormData)=> {
    console.log("Running on server")
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message")

    if(!validateString(senderEmail, 500)){
        return {
            status: 400,
            error: "Invalid email"
        }
    }

    if(!validateString(message, 500)){
        return {
            status: 400,
            error: "Invalid email"
        }
    }

    try {
        await resend.emails.send({
            from: "Rajat's Portfolio<onboarding@resend.dev>",
            to: "rajatverma5338@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to : senderEmail as string,
            text: message as string
        })
    }
    catch (error:unknown) {
       return {
        error : getErrorMessage(error)
       }
    }
    
  
  }