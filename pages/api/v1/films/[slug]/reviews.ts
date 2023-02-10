import { NextApiRequest, NextApiResponse } from "next";
import { films } from "data";
import { Film } from "types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const film = films.find((f: Film) => f.slug === slug);
  return res.status(200).json({ film });
}
