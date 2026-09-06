require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const TWILIO_NUMBER = process.env.TWILIO_PHONE_NUMBER; // e.g. +1415xxxxxxx

app.post('/send-notification', async (req, res) => {
  try {
    const { to, message, channel } = req.body;

    if (!to || !message) {
      return res.json({ ok: false, error: 'Missing to or message' });
    }

    let from = TWILIO_NUMBER;
    let finalTo = to;

    // Handle WhatsApp
    if (channel === 'whatsapp') {
      from = `whatsapp:${TWILIO_NUMBER}`;
      finalTo = `whatsapp:${to}`;
    }

    const result = await client.messages.create({
      body: message,
      from: from,
      to: finalTo
    });

    console.log(`✅ Sent ${channel || 'sms'} to ${to} | SID: ${result.sid}`);
    res.json({ ok: true, sid: result.sid });
  } catch (err) {
    console.error('❌ Twilio error:', err.message);
    res.json({ ok: false, error: err.message });
  }
});

app.get('/', (req, res) => {
  res.send('KisanQueue Notification Backend is running ✅');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});