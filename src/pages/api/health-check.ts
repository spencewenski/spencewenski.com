import { NextApiRequest, NextApiResponse } from "next";

type Output = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Output>,
) {
  res.status(200).json({ message: "success" });
}
