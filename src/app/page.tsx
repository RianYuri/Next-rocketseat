import Link from "next/link";
import {useState} from 'react'
export default async function Home() {
const [Request, setRequest] = useState()

const response =  await fetch('https://api.github.com/users/RianYuri',{
    next:{
      revalidate:30,
    }})

    const user = response.json();
 
  return (
    <>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(user,null,2)}</pre>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
