import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified email if set up
      to: 'adarshnagar247@gmail.com', // Your email from earlier
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>New Message from Portfolio</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}