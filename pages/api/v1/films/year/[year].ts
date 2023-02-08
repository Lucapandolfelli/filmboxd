import { NextApiRequest, NextApiResponse } from "next";
import { films } from "data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { year } = req.query;
  return res
    .status(200)
    .json(films.filter((film) => film.year == Number(year)));
}
