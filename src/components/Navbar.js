import React from "react";
//import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // const navigate = useNavigate(); why is not working in Navigate

  // console.log(user,email)
  const handleLogout = async () => {
    try {
      await logOut();
      //navigate('/'); why is not working in Navigate
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      {user?.email ? (
        <div>
          <button className="text-block pr-4">Account</button>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <button className="text-block pr-4">Sign In</button>
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
