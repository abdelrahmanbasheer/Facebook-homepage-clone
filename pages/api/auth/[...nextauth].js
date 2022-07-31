import NextAuth, { User as NextAuthUser } from 'next-auth'

import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: "608628747507125" ,
      clientSecret: "19ba092142f911d039d7e6d76b4fcaa9",
    })
  ],
  
    // ...add more providers here
  
})