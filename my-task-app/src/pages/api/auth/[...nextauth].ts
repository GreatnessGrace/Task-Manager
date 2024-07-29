// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// import clientPromise from '../../../app/mongodb';

// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         // Implement your own logic to authenticate users
//         // Example: Check credentials in your database
//         const user = { id: '1', name: 'User', email: credentials?.email }; // Replace with actual user retrieval
//         if (user) {
//           return user;
//         } else {
//           throw new Error('Invalid credentials');
//         }
//       }
//     })
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   pages: {
//     signIn: '/auth/login', // Custom sign-in page
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });


import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../utils/auth'; // Utility to verify password
import { getUserByEmail } from '../../../utils/db'; // Utility to get user from DB

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await getUserByEmail(credentials?.email || '');
        if (user && (await verifyPassword(credentials?.password || '', user.password))) {
          return { email: user.email };
        }
        throw new Error('Invalid credentials');
      }
    })
  ],
  session: {
    strategy: 'jwt'
  }
});
