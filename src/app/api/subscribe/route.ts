import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    // You'll need to set up App Password in your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // your gmail
        pass: process.env.GMAIL_APP_PASSWORD, // your app password
      },
    })

    // Email to you about new subscription
    const mailToYou = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'New Email Subscription - Portfolio Website',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Email Subscription</h2>
          <p>Someone is interested in your web development services!</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Portfolio Website Footer</p>
          </div>
          
          <p>You should reach out to them within 24 hours to discuss their project needs.</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #666;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    }

    // Confirmation email to subscriber
    const mailToSubscriber = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thanks for Your Interest! - Khanh Portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Interest!</h2>
          <p>Hi there!</p>
          
          <p>Thank you for showing interest in my web development services. I received your email and will get back to you within 24 hours to discuss how I can help bring your ideas to life!</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007bff;">
            <h3 style="color: #333; margin-top: 0;">What's Next?</h3>
            <ul style="color: #555;">
              <li>I'll review your request and prepare some initial ideas</li>
              <li>We'll schedule a call to discuss your project requirements</li>
              <li>I'll provide you with a detailed proposal and timeline</li>
            </ul>
          </div>
          
          <p>In the meantime, feel free to check out my portfolio at <a href="https://namkhanh.dev" style="color: #007bff;">namkhanh.dev</a> to see some of my recent work.</p>
          
          <p>Best regards,<br>
          <strong>Khanh Pham</strong><br>
          Web Developer<br>
          <a href="mailto:khanhpn.dev@gmail.com" style="color: #007bff;">khanhpn.dev@gmail.com</a>
          </p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="font-size: 12px; color: #666;">
            This email was sent because you submitted your email on my portfolio website. 
            If you didn't request this, you can safely ignore this email.
          </p>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailToYou)
    await transporter.sendMail(mailToSubscriber)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
