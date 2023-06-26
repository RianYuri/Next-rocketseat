import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <h1>Usuario Logado</h1>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
};

export default SignIn;
