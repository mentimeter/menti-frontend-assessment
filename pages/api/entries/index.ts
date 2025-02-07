import type { NextApiRequest, NextApiResponse } from 'next';
import type { Entry } from '../../../src/models';
import { getData, writeData } from './_data';

const mockLoadingTime = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await mockLoadingTime();
  const data = await getData();
  if (req.method === 'GET') {
    // Handle GET requests
    res.status(200).json(data.entries);
  } else if (req.method === 'POST') {
    // Handle POST requests
    const entry = req.body as Entry;
    entry.id = Math.random().toString(32).substring(2);
    data.entries.push(entry);
    await writeData(data);
    res.status(200).json(entry);
  } else {
    res.status(400).end();
  }
}
