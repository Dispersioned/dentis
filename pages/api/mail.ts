import formData from 'form-data';
import Mailgun from 'mailgun.js';
import type { NextApiRequest, NextApiResponse } from 'next';

const PRIVATE_KEY = process.env.MAILGUN_PRIVATE_API_KEY || 'private-key-not-provided';
const PUBLIC_KEY = process.env.MAILGUN_PUBLIC_API_KEY || 'public-key-not-provided';
const DOMAIN = process.env.MAILGUN_DOMAIN || 'domain-not-provided';
const MAILS = (process.env.MAILS || 'not-provided').split(',') || [];

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: PRIVATE_KEY,
  public_key: PUBLIC_KEY,
});

export default (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);

  mg.messages
    .create(DOMAIN, {
      from: 'mailgun.autoreply@mail.com',
      to: MAILS,
      subject: 'Заявка на звонок',
      text: `Номер телефона: ${body.phone} имя: ${body.name}`,
      html: `<h1>Номер телефона: ${body.phone} имя: ${body.name}</h1>`,
    })
    .then((msg) => console.log('msg', msg))
    .catch((err) => console.error(err));

  res.status(200).json({ name: 'John Doe' });
};
