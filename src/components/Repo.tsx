// import { cookies, headers } from "next/dist/client/components/headers";

export async function Repos() {

await new Promise((resolve) => setTimeout(resolve,2000)) //isso faz com que a requisição demore 2 seg

// const userCookies = cookies()
// const userHeaders = headers() e possivel pegar algum cookie usando o .get na frente do userCookie


    const response =  await fetch('https://api.github.com/users/RianYuri/repos',{
        cache:'no-store'

      })
    
      console.log(response)
        const repos = await response.json();
      return (
        <>
          <h1>Repos</h1>
          {/* {JSON.stringify(userCookies,null,2)} */} 
          {/* {JSON.stringify(userHeaders,null,2)} */}
          <pre>{JSON.stringify(repos,null,2)}</pre>
        </>
      );
    }
    