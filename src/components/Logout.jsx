import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeCookie("my_token");
    removeCookie("user");
    navigate("/");
  };
  return (
    <button
  onClick={handleLogout}
  className="text-[#FFF1B5] font-serif bg-[#43302E] w-full shadow-md hover:text-[#43302E] ease-in hover:bg-[#FFF1B5] focus:ring-4 focus:outline-none focus:ring-[#A16207]/30 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>
  Logout
</button>
  );
};

export default Logout;