// Serverless contact function for Vercel / Netlify deployment
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { fullName, phone, email, projectType, message, website } = req.body || {};

  // Honeypot anti-spam check
  if (website) {
    return res.status(200).json({ success: true, message: 'Submission received' });
  }

  if (!fullName || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    // In production, integrate with nodemailer or SendGrid using process.env secrets
    // e.g. process.env.CONTACT_EMAIL
    console.log('New Contact Submission:', { fullName, phone, email, projectType, message });

    return res.status(200).json({
      success: true,
      message: 'Contact request submitted successfully.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ success: false, message: 'Server error sending request.' });
  }
};