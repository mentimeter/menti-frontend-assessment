import { NextApiRequest, NextApiResponse } from "next";
import { Entry } from "../../../src/models";
import { getData, writeData } from "./_data";

const mockLoadingTime = () => {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(null);
    }, 1000);
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await mockLoadingTime();
  const id = req.query.id as string;
  const data = await getData();
  if (req.method === "GET") {
    const entry = data.entries.find((entry) => entry.id === id);
    if (entry) {
      res.status(200).json(entry);
    } else {
      res.status(404).end();
    }
  } else if (req.method === "PUT") {
    // Handle PUT requests
    const entry = req.body as Entry;
    const index = data.entries.findIndex((e) => e.id === id);
    if (index !== -1) {
      data.entries[index] = entry;
      await writeData(data);
      res.status(200).json(entry);
    } else {
      res.status(404).end();
    }
  } else if (req.method === "DELETE") {
    // Handle DELETE requests
    const index = data.entries.findIndex((e) => e.id === id);
    if (index !== -1) {
      data.entries.splice(index, 1);
      await writeData(data);
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } else {
    res.status(400).end();
  }
}
