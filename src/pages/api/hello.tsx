import { NextApiRequest, NextApiResponse } from 'next';

import { NextApiFunc } from '~/types/index';

const handler = (req: NextApiRequest, res: NextApiResponse): NextApiFunc => {
  return res.status(200).json({ name: 'John Doe' });
};

export default handler;
