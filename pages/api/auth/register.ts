import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import User from "models/User";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name: username,
      email,
      hashedPassword,
      image: "",
    });

    newUser
      .save()
      .then(() => res.redirect("/login"))
      .catch((err: string) =>
        res.status(400).json({ error: "Error on '/api/register': " + err })
      );
  } catch (error) {
    res.status(500).json({ error });
  }
}
