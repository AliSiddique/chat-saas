import { Request } from 'express';
import jwt from 'jsonwebtoken';

const generateToken = (res:any, userId:any) => {
  const token = jwt.sign({ userId }, "33q3322ewq", {
    expiresIn: '30d',
  });
  console.log(token);
   res.cookie('jwt', token, {
    httpOnly: true,
    secure: true, // Use secure cookies in production
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    domain: 'localhost',
    path: '/',

  });
};

export default generateToken;
