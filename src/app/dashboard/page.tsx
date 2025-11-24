import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    return <p>You must login first.</p>;
  }

  return (
    <div>
      <h1>Welcome {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
