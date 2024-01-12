import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDb();

    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Invalid credentials!");

    const isPwCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPwCorrect) throw new Error("Invalid Password!");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("login with credentials failed!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(profile);
      if (account.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log("failed to sign in");
          return false;
        }
      }

      return true;
    },
  },
});
