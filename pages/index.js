import Head from "next/head"
import Header from "../components/Header"
import {getSession}  from "next-auth/react"
import Login from "../components/Login";
import Sidebar from "../components/Siderbar";
export default function Home() {

  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
    <Header></Header>
    <main>
      <Sidebar></Sidebar>
    </main>
    </div>
  )
}
export  async function getServerSideProps(context){
const session= await getSession(context);
return{
  props:{
    session,
  },
};

}
