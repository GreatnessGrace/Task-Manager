import type { NextApiRequest, NextApiResponse } from 'next';
import { getTasks, createTask, updateTask, deleteTask } from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      const tasks = await getTasks(req.query.userId as string);
      res.status(200).json(tasks);
      break;
    case 'POST':
      await createTask(req.body);
      res.status(201).end();
      break;
    case 'PUT':
      await updateTask(req.body);
      res.status(200).end();
      break;
    case 'DELETE':
      await deleteTask(req.body.id);
      res.status(200).end();
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
