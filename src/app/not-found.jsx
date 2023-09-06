import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold ">Not Found</h1>
        <Link className="text-lg text-slate-400" href="/">
          return to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
