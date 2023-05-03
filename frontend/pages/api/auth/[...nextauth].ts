import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email !== "test@test.test" || password !== process.env.SECRET_PASS) {
          throw new Error("invalid credentials");
        }

        // if everything is fine
        return {
          id: "124",
          name: "Dumerat",
          email: "dumeratonlaveur@gmail.com",
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/adminpanel",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      // if (params.user?.role) {
      //   params.token.role = params.user.role;
      // }
      // return final_token
      return params.token;
    },
  },
};

export default NextAuth(authOptions);