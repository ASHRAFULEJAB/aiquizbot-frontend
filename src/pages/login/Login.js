import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import logo from "../../assets/logo.png";
import loginBanner from "../../assets/140shots_so.png";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center items-center p-8 bg-white w-full lg:w-1/2 lg:px-24">
        <div className="flex justify-start w-full mb-10">
          <Link to="/">
            <img src={logo} alt="" className="w-48" />
          </Link>
        </div>
        <LoginForm />
      </div>
      <div className="bg-gradient-to-tr from-[#FC495F] from-62%  to-[#FFC371] to-38% w-1/2 lg:block hidden md:hidden">
        <div className="flex flex-col justify-center items-center text-white h-screen">
          <h1 className="text-4xl">Welcome to Quizzbot</h1>
          <p>Ignite Your Mind with QuizBot AI</p>
          <img src={loginBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
