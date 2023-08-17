import { checkData, checkDataPassword } from "@/pages/services/credential";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session:{
        jwt:true
    },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        async authorize({email,password}) {
            const isEmail=checkData(email)
            if(!isEmail){
throw new Error("user not found")
            }
            const isvalid =await checkDataPassword(isEmail.password,password) 
            if (!isvalid) {
throw new Error("incorrect password")
                
            }
            return{email}

        }

    })
  ],
}

export default NextAuth(authOptions)