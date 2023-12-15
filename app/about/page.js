import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <Link
        className=" bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white px-4 border border-pink-500 hover:border-transparent rounded"
        href={"/"}
      >
        Back Home
      </Link>
    </div>
  );
};
export default About;
