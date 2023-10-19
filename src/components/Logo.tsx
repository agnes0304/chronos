import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center" onClick={handleClick}>
      <img src={logo} className="w-1/3 hover:opacity-20 transition-opacity duration-300" />
    </div>
  );
};

export default Logo;
