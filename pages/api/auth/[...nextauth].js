import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkData, checkDataPassword } from "../services/credential";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true
  },
  providers: [
    CredentialsProvider({
      async authorize({ email, password }) {
        const isEmail = checkData(email)
        if (!isEmail) {
          throw new Error("user not found")
        }
        const valid = await checkDataPassword(isEmail.password, password)
        if (!valid) {
          throw new Error("incorrect password")

        }
        return { email }

      }

    })
  ],
}

export default NextAuth(authOptions)