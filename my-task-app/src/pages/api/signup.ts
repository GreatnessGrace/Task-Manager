import type { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  await createUser(email, password);
  res.status(201).end();
};
