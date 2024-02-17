"use server"
import React from "react"
import { getErrorMessage, validateString } from "@/lib/utils"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contact-form-email"

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
    let data 
    try {
       data =  await resend.emails.send({
            from: "Rajat's Portfolio<onboarding@resend.dev>",
            to: "rajatverma5338@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to : senderEmail as string,
            // react: React.createElement(ContactFormEmail, {
            //     message : message as string,
            //     senderEmail : senderEmail as string
            // })
        })
    }
    catch (error:unknown) {
       return {
        error : getErrorMessage(error)
       }
    }
    
    return {
        data
    }
  
  }