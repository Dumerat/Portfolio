import { NextApiRequest, NextApiResponse } from 'next';

export async function deleteProject(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.body;
    console.log(req.body);
    
    const response = await fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-ezpcy/endpoint/data/v1/action/deleteOne', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': process.env.API_KEY,
      },
      body: JSON.stringify({
        "dataSource": 'Portfolio',
        "database": 'Portfolio',
        "collection": 'Project',
        "filter": {id: id}
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
  