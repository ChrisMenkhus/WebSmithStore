const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
	await NextCors(req, res, {
		// Options
		methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
		origin: '*',
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	});

	if (req.method === 'POST') {
		try {
			const session = await stripe.checkout.sessions.create({
				line_items: req.body,
				payment_method_types: ['card'],
				mode: 'payment',
				success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/?canceled=true`,
			});
			// res.redirect(303, session.url);
			res.json({ url: session.url });
		} catch (err) {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
