import { NextApiRequest, NextApiResponse } from "next";
import { directors } from "data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  return res
    .status(200)
    .json(directors.find((director) => director.slug == slug));
}
