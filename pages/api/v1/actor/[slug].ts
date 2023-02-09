import { NextApiRequest, NextApiResponse } from "next";
import { actors } from "data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  return res.status(200).json(actors.find((actor) => actor.slug == slug));
}
