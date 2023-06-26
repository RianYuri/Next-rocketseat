export async function User() {
    await new Promise((resolve) => setTimeout(resolve,5000))
const response =  await fetch('https://api.github.com/users/RianYuri',{
    // next:{
    //   revalidate:30, Essa funbção faz o fetch da função a cada 30s
    // }
    // cache:'force-cache' opção padrão next, toda vez que usuarios diferentes acessarem a pagina todos eles vao receber a mesma resposta
    // cache:'no-store', não quero armazenar o cache igual para todos os usuario cada chamada e diferente para cada usuario
    cache:'no-store'
  })

    const user = await response.json();
 
  return (
    <>
      <h1>User</h1>
      <pre>{JSON.stringify(user,null,2)}</pre>
    </>
  );
}
