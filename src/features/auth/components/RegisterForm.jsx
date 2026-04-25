import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { register as accountRegister } from "../../services/auth";
import { register as accountRegister } from "../../../../services/auth";
import ButtonSpinner from "../../../components/ButtonSpinner";
const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const handleRegister = async (data) => {
    console.log(data);

    const res = await accountRegister(data);

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Register Successfully");
      // console.log(json)
      navigate("/login");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="space-y-4 md:space-y-6"
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-[#43302E]"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="bg-white/40 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5 backdrop-blur-md"
          placeholder="eg. John Doe"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-[#43302E]"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="bg-white/40 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5 backdrop-blur-md"
          placeholder="eg. john@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-[#43302E]"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="••••••••"
          className="bg-white/40 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5 backdrop-blur-md"
          required
        />
      </div>

      <div>
        <label
          htmlFor="confirm-password"
          className="block mb-2 text-sm font-medium text-[#43302E]"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="••••••••"
          {...register("password_confirmation")}
          className="bg-white/40 border border-[#A16207]/30 text-gray-900 text-sm rounded-lg focus:ring-[#A16207] focus:border-[#A16207] block w-full p-2.5 backdrop-blur-md"
          required
        />
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            required
            className="w-4 h-4 rounded border border-[#43302E] 
              
               text-[#C1DBEB] 
               focus:ring-[#FFF1B5] focus:ring-2 
               cursor-pointer"
          />
        </div>
        <div className="ml-3 text-sm text-[#43302E]">
          <label htmlFor="terms" className="font-light text-[#43302E]/80">
            I accept the{" "}
            <a className="font-medium text-[#43302E] hover:underline" href="#">
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center items-center text-white bg-[#43302E] hover:bg-[#C1DBEB] focus:ring-4 hover:text-[#43302E] focus:outline-none focus:ring-[#C1DBEB] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg"
      >
        {isSubmitting ? <ButtonSpinner /> : "Create an account"}
      </button>

      <p className="text-sm font-light text-[#43302E]/80">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-[#43302E] hover:underline"
        >
          Login here
        </Link>
      </p>
    </form>
    
  );
};

export default RegisterForm;
