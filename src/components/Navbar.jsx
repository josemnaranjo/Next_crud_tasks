import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around p-3 bg-slate-600">
      <Link href="/">
        <h3 className="text-xl font-semibold">NextCRUD</h3>
      </Link>

      <ul className="flex gap-3">
        <li className="cursor-pointer hover:underline hover:underline-offset-2">
          <Link href="/new">new task</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:underline-offset-2">
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
