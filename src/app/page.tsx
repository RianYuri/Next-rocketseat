// 'use client' usado quando tem interações do usuario useState e useEffect para interações de fetch
// caso for usar para apenas um pequna parte da pagina colocar ele em um component


import {User} from "@/components/User";
import {Repos} from "@/components/Repo";
import {Suspense} from 'react';
// o Suspense é o metodo que quando algo esta carregando ele roda um Loading
import Link from "next/link";
// import { useRouter } from "next/navigation";


export default function Home() {
// const router = useRouter()
// router.push("/dashboard"); apenas um jeito de vanegar de pagina com base em uma ação


//temos tambem router.refresh(/dashboard), ele atualiza a pagina quando acessada ela limpa o cache
  return (
    <>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Suspense fallback={<p>Usuario carregando...</p>}>

      <User/>
      </Suspense>
      <Repos/>
      
    </>
  );
}
