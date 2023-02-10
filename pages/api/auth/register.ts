import { NextApiRequest, NextApiResponse } from "next";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { username, email, password } = req.body;
    const user = {
      username,
      email,
      password,
    };
    console.log(user);
    res.redirect("/login");
  } catch (error) {}
}
