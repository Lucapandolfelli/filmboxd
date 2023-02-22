import { NextApiRequest, NextApiResponse } from "next";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { username, email, password } = req.body;
    const user = {
      username,
      email,
      password,
    };
    res.redirect("/login");
  } catch (error) {}
}
