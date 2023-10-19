import Logo from "../components/Logo";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <div className="relative group cursor-pointer">
        <Logo />
        <h1 className="text-xl font-semibold opacity-0 absolute top-[45%] left-[45%] pointer-events-none group-hover:opacity-100 transition-opacity duration-500">
          Home
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
