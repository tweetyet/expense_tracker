import { useForm } from "react-hook-form";
import  { Toaster } from "react-hot-toast";
import { Link} from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {

  return (
    <section className="dark:bg-gray-900">
  <Toaster />
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 font-serif">
    <Link
      to="/"
   
      className="flex items-center mb-6 text-2xl font-semibold text-[#43302E]"
    >
      <img
        className="size-14 mr-2"
        src="/trackifyLogo.png"
        alt="logo"
      />
    Trackify
    </Link>

    <div className="w-full backdrop-blur-xl border border-[#A16207]/30 rounded-2xl shadow-2xl md:mt-0 sm:max-w-md xl:p-0 ">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        
        <h1 className="text-xl font-bold leading-tight tracking-tight text-[#43302E] md:text-2xl text-center ">
          Create an account
        </h1>

       <RegisterForm/>
      </div>
    </div>
  </div>
</section>
  );
};

export default RegisterPage;