// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Data } from "../../models/Todo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      id: 1,
      title: "delectus aut autem",
      done: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      done: false,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      done: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      done: true,
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      done: false,
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      done: false,
    },
    {
      id: 7,
      title: "illo expedita consequatur quia in",
      done: false,
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      done: true,
    },
    {
      id: 9,
      title: "molestiae perspiciatis ipsa",
      done: false,
    },
    {
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      done: true,
    },
    {
      id: 11,
      title: "vero rerum temporibus dolor",
      done: true,
    },
    {
      id: 12,
      title: "ipsa repellendus fugit nisi",
      done: true,
    },
    {
      id: 13,
      title: "et doloremque nulla",
      done: false,
    },
    {
      id: 14,
      title: "repellendus sunt dolores architecto voluptatum",
      done: true,
    },
    {
      id: 15,
      title: "ab voluptatum amet voluptas",
      done: true,
    },
    {
      id: 16,
      title: "accusamus eos facilis sint et aut voluptatem",
      done: true,
    },
    {
      id: 17,
      title: "quo laboriosam deleniti aut qui",
      done: true,
    },
    {
      id: 18,
      title: "dolorum est consequatur ea mollitia in culpa",
      done: false,
    },
    {
      id: 19,
      title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      done: true,
    },
    {
      id: 20,
      title: "ullam nobis libero sapiente ad optio sint",
      done: true,
    },
  ]);
}
