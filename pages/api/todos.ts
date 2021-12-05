// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/todos"
  );
  const data = await response.json();
  res.status(200).json(data);
}
