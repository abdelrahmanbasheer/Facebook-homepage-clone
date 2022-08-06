import Head from "next/head"
import Header from "../components/Header"
import {getSession}  from "next-auth/react"
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
export default function Home() {


  return (

    <div>
      <Head>
        <title>Facebook</title>
      </Head>
    <Header></Header>
    <main className="flex bg-gray-100">
      <Sidebar></Sidebar>
      <Feed></Feed>
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
