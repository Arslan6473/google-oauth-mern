import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserInfo(user);
  }, []);

  const logoutHandle = () => {
    localStorage.removeItem("user");
    setInterval(() => {
      navigate("/login");
    }, 2000);
  };
  return (
    <div className="w-full h-screen bg-gray-950 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <img
          src={userInfo?.picture}
          alt="Profile pic"
          className="rounded-full object-cover h-30 "
        />
        <h1 className="text-gray-100 text-xl font-medium ">
          Hy, {userInfo?.name}
        </h1>
        <p className="text-gray-200 text-md font-medium ">{userInfo?.email}</p>
      </div>
      <button
        onClick={logoutHandle}
        className="py-2 px-3 text-gray-600 hover:bg-slate-100 mt-3  font-medium bg-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
