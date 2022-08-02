import NextAuth, { User as NextAuthUser } from 'next-auth'

import FacebookProvider from "next-auth/providers/facebook";
export default NextAuth({
  
  // Configure one or more authentication providers
    providers: [
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        
      profile({profile}){
        console.log(profile)
        return {
          
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        } 
        
      }



    })
  ],
  

  
  
    // ...add more providers here
  
})

