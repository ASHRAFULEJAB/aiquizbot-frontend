import { useContext, useState } from "react";
import LoaderSpinner from "./Loader/LoaderSpinner";
import Divider from "./Divider";
import SocialMediaLogin from "./SocialMediaLogin";
import EmailInput from "./Shared/EmailInput";
import PasswordInput from "./Shared/PasswordInput";
// import { validateForm } from "@/utils/validateForm";
// import { useRouter } from "next/navigation";
// import { AuthContext } from "@/context/AuthProvider";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate, useRouteError } from "react-router-dom";
import RememberMe from "./RememberMe";
import PrimaryButton from "./PrimaryButton";
import { validateForm } from "../utils/validateForm";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setLoginError("");
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSignIn = () => {
    if (validateForm(data, setErrors, false)) {
      const { email, password } = data;
      setLoading(true);
      login(email, password)
        .then((res) => {
          const user = res.user;
          setLoading(false);
          navigate('/dashboard/dashboard');
          toast.success("Login has been Successful!!");
        })
        .catch((err) => {
          toast.error("User not found! Please Sign Up First.");
          setLoginError("Incorrect email or password.");
          setLoading(false);
        });
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full ">
      <div className="text-black w-full mb-10">
        <h1 className="font-bold text-3xl mb-2">Login</h1>
      </div>
      <SocialMediaLogin>Sign in with Google</SocialMediaLogin>
      <Divider />
      <EmailInput
        email={data.email}
        handleChange={handleChange}
        error={errors.email}
      />
      <PasswordInput
        password={data.password}
        handleChange={handleChange}
        error={errors.password}
      />
      {loginError && (
        <div className="my-3 text-sm text-red-500">{loginError}</div>
      )}
      <RememberMe />
      {loading ? (
        <PrimaryButton loading={loading}>
          <LoaderSpinner /> Logging in
        </PrimaryButton>
      ) : (
        <PrimaryButton funq={handleSignIn}>Log In</PrimaryButton>
      )}

      <p className="text-sm text-black mt-6 ">
        New here?{" "}
        <a href="/sign-up" className="text-[#FC495F] hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
