import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../../../models/User';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email });
        if (user) {
          return SignInUser({ password, user });
        } else {
          throw new Error('Невдала спраба входу.');
        }
      },
    }),
  ],
  pages: {
    signIn: '/user/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        return { ...token, id: user._id, role: user.role };
      }
      return { ...token };
    },

    async session({ session, token, user }) {
      return {
        ...session,
        user: { ...session.user, id: token.id, role: token.role },
      };
    },
  },
  secret: process.env.JWT_SECRET,
};

const SignInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error('Please enter your password.');
  }
  // const testPassword = await bcrypt.compare(password, user.password);
  const testPassword = password == user.password;
  if (!testPassword) {
    throw new Error('Email or password is wrong!');
  }

  return user;
};
