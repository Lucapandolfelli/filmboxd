import { NextApiRequest, NextApiResponse } from "next";
import { actors } from "data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(actors);
}
