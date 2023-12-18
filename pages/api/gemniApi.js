import predict from '../../src/services/ai-generative/api/predict';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const chatRequest = req.body;

        try {
            const predictions = await predict(chatRequest);
            res.status(200).json({ predictions });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).end('Method Not Allowed');
    }
}
