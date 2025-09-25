import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config();

const user=process.env.EMAIL_USER;
const password=process.env.EMAIL_PASS;

export async function POST(req:NextRequest){
    const {name,email,message}=await req.json();

    const transporter=nodemailer.createTransport({
        //@ts-ignore
        service:'gmail',
        auth:{
            user,
            pass:password
        },
    })

    try {
        // Verify SMTP connection
        await transporter.verify();
        console.log('SMTP server connection verified');

        await transporter.sendMail({
            from:user,
            to:user,
            subject:`New contact form submission by ${name}`,
            text:message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        })
        return NextResponse.json({message:'Email sent successfully'}, {status:200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:'Failed to send mail'},{status:500})        
    }
}