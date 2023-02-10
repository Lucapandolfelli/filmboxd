import { NextApiRequest, NextApiResponse } from "next";
import { films } from "data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  return res.status(200).json(films.find((film) => film.slug == slug));
}
