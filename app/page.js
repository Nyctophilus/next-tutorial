import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>

      <Link
        className=" bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white px-4 border border-pink-500 hover:border-transparent rounded"
        href={"users"}
      >
        manage users
      </Link>
    </main>
  );
}
