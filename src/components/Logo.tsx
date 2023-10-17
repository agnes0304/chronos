import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={logo} className="w-1/3" />
    </div>
  );
};

export default Logo;
