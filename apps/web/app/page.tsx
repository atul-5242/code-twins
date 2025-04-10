import {client} from "@repo/db/client";

export default async function Home(){
  const user = await client.user.findFirst();
  return (<>
    <h1>Hello {user?.username}</h1>
    <p>Welcome to the world of web</p>
    <p>This is a monorepo project</p>
    <p>{user?.password}</p>
  </>)
} 