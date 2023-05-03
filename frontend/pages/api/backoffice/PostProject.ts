import { NextApiRequest, NextApiResponse } from 'next';

 async function createProject() {
  try {
    // const data = req.body;

    const response = await fetch('https://eu-central-1.aws.data.mongodb-api.com/app/data-ezpcy/endpoint/data/v1/action/insertOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apiKey': process.env.API_KEY,
      },
      body: JSON.stringify({
        "dataSource": 'Portfolio',
        "database": 'Portfolio',
        "collection": 'Project',
        "document": {
          "id": "9",
          "image": "/images/NG",
          "git": "https:/m/Dumerat/Projet-7",
          "name": "Mon viieumoire",
          "desc": "Building t-end of a book rating site"
        }
      }),
    });
    const result = await response.json();
    console.log(result.message);

  } catch (error) {
    console.error(error);

  }
}
  