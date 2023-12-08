import NextAuth from 'next-auth/next';
import db from '../../../../../utils/db.js';
import { options } from './options.js';
// import bcrypt from 'bcrypt';

db.connectDb();

const handler = NextAuth(options);

export { handler as GET, handler as POST };
