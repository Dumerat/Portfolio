import { NextApiRequest, NextApiResponse } from 'next';

export async function createSkill(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id, name, image, link } = req.body;

    const response = await fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-ezpcy/endpoint/data/v1/action/updateOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': process.env.API_KEY,
      },
      body: JSON.stringify({
        dataSource: 'Portfolio',
        database: 'Portfolio',
        collection: 'skills',
        query: { id: id },
        update: { $push: { skills: {name, image, link} } },
      }),
    });

    const result = await response.json();
    console.log(result.message);
    res.status(200).json({ message: result.message });
    
  } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
  }
}