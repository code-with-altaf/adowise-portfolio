import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * EMAIL NOTIFICATION SYSTEM (NODEMAILER)
 * 
 * To make this work:
 * 1. npm install nodemailer @types/nodemailer
 * 2. Add the following to your .env.local:
 *    EMAIL_USER="reachmohdaltaf@gmail.com"
 *    EMAIL_PASS="your-gmail-app-password"
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    console.log('Sending email notification for lead:', name);

    // 1. Setup Nodemailer Transporter (using Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Prepare Email Content
    const mailOptions = {
      from: `"Adowise Website" <${process.env.EMAIL_USER}>`,
      to: 'reachmohdaltaf@gmail.com', // Your email
      subject: `🚀 New Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1f1b16;">
          <h2 style="color: #d9692a;">New Discovery Call Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <hr style="border: 1px solid #e1d7c5; margin: 20px 0;" />
          <p style="font-size: 12px; color: #8a7f72;">Sent from your Adowise Landing Page. User has been redirected to Calendly to pick a time.</p>
        </div>
      `,
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    });

  } catch (error: any) {
    console.error('Nodemailer Error:', error);

    // Fallback if email credentials are missing or wrong
    if (!process.env.EMAIL_PASS) {
      console.log('Falling back to Demo Mode: Missing EMAIL_PASS');
      return NextResponse.json({
        success: true,
        message: 'Demo mode: Email sent simulation (add EMAIL_PASS to go live)',
      });
    }

    return NextResponse.json(
      { success: false, message: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
