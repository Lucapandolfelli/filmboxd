import { NextApiRequest, NextApiResponse } from "next";
import { films } from "data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { genre } = req.query;
  return res
    .status(200)
    .json(films.filter((film) => film.genres.find((g) => g.name == genre)));
}
