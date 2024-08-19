import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { apiRequest } from "../utils/apiRequest";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const code = authResult["code"];
        const response = await apiRequest({
          url: `/auth/google?code=${code}`,
          method: "GET",
        });
        const { email, name, picture } = response?.data;
        const userData = {
          email,
          name,
          picture,
          token: response?.token,
        };
        localStorage.setItem("user", JSON.stringify(userData));
        navigate("/");
      }
    } catch (error) {
      console.log("Error while login with google ", error);
    }
  };

  const clickHandle = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-950">
      <button
        onClick={clickHandle}
        className="py-3 px-3 text-gray-600 hover:bg-slate-100  font-medium bg-white rounded-md"
      >
        LOGIN WITH GOOGLE
      </button>
    </div>
  );
}

export default Login;
