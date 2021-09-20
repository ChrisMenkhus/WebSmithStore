export default async function (req, res) {
	res.status(200).json({ name: 'test' });
	// res.status(200).json(req.body);
}
