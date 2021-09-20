const stripe = require('stripe')(
	'sk_test_51Ja8zSFoJmKmLvmy6c6oIorg8wrrZFFciyUpFm4PW8sxzCoOEYOUiVWHfktmtxpa3N5mPqW2B0Jn74fU6p6Aufpf00qjN1vI7p'
);

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const prices = await stripe.prices.list({});
			res.status(200).json(prices);
		} catch {
			res.status(err.statusCode || 500).json(err.message);
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
