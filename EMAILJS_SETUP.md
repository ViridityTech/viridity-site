# EmailJS Setup Guide for Viridity Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended)
4. Click **"Connect Account"** and authorize with your Gmail
5. Name it "Viridity Contact Form"
6. **Copy the Service ID** (looks like: `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use these settings:

**Template Name:** Contact Form Submission

**Subject:** `🚀 NEW LEAD: {{from_name}} - {{subject}}`

**Content:**
```
🚀 NEW LEAD ALERT - Viridity Contact Form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT DETAILS:
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

💬 MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted: {{submission_date}}
🌐 Source: Viridity Website Contact Form
⚡ Priority: New Business Inquiry

NEXT STEPS:
• Respond within 24 hours
• Add to CRM/lead tracking
• Schedule follow-up if needed

---
This email was automatically generated from your Viridity website contact form.
```

**Alternative Professional Template (Option 2):**
```
Subject: 💼 Business Inquiry from {{from_name}}

Hello Viridity Team,

You have received a new business inquiry through your website contact form.

CONTACT INFORMATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: {{from_name}}
Email: {{from_email}}
Inquiry Type: {{subject}}
Date/Time: {{submission_date}}

INQUIRY DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

RECOMMENDED ACTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Respond within 24 hours for optimal conversion
✅ Add contact to your CRM system
✅ Schedule follow-up call if appropriate
✅ Send project proposal if requested

Best regards,
Viridity Website Contact System
```

4. **Save and copy the Template ID** (looks like: `template_xxxxxxx`)

## Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (looks like: `user_xxxxxxxxxxxxxxx`)

## Step 5: Update Your Code
1. Open `src/lib/emailjs.ts`
2. Replace the placeholder values:
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx', // Your actual service ID
  TEMPLATE_ID: 'template_xxxxxxx', // Your actual template ID  
  PUBLIC_KEY: 'user_xxxxxxxxxxxxxxx', // Your actual public key
};
```

## Step 6: Test the Form
1. Run `npm run dev`
2. Fill out the contact form
3. Check your email for the submission!

## Troubleshooting
- Make sure all IDs are correct
- Check EmailJS dashboard for error logs
- Verify your Gmail account is properly connected
- Check browser console for any JavaScript errors 