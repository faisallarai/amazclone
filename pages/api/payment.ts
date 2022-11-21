import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import crypto from 'crypto';

const router = createRouter<NextApiRequest, NextApiResponse>();
const secret = process.env.PAYSTACK_SECRET_KEY as string;

router.post(async (req, res) => {
  console.log('webhook', req.body);
  const hash = crypto
    .createHmac('sha512', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

  console.log(hash);
  console.log(req.headers['x-paystack-signature']);
  if (hash == req.headers['x-paystack-signature']) {
    // Retrieve the request's body
    const event = req.body;

    console.log('event', event);
    // Fulfill the Order
    // Save in the DB
  }

  res.send(200);
});

router.get(async (req, res) => {
  const { reference } = req.query;
  const url = `https://api.paystack.co/transaction/verify/${reference}`;
  const resp = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.PAYSTACK_SECRET_KEY,
    },
    cache: 'no-cache',
  });
  const result = await resp.json();
  return res.status(200).json(result);
});

export default router.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found');
  },
});
