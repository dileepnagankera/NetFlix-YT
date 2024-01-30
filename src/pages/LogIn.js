import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";


const LogIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPossword] = useState("");
  const [error,setError]=useState("")
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/32c47234-8398-4a4f-a6b5-6803881d38bf/eed3a573-8db7-47ca-a2ce-b511e0350439/IN-en-20240122-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              {error?<p className='p-3 bg-red-400 my-3'>{error}</p>:null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700"
                  type="name"
                  placeholder="UserName"
                  autoComplete="username"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPossword(e.target.value)}
                  className="p-3 my-2 bg-gray-700"
                  type="password"
                  placeholder="PassWord"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remembar me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?{" "}
                  </span>
                  Sign In{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn


/*const { user } = UserAuth;

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  } 
  <ProtectedRoutr>
      <Account />
    </ProtectedRoutr>
  */