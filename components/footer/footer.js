import Link from "next/link";

const Footer = () => {
  return (
    <div className="container flex justify-between items-center py-6">
      <Link href="/" className="capitalize font-bold">
        mo
      </Link>
      <div className="capitalize">mo creative thoughts agency @ all rights reseved</div>
    </div>
  );
};
export default Footer;
