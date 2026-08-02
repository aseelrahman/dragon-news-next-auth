"use client";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data, 'data');
    
  };
  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data, 'data');
    
  };

  return (
    <div>
      <h2 className="font-bold text-lg">Login with</h2>
      <div className="flex flex-col gap-2 mt-6">
        <button className="btn border-blue-500 text-blue-500" onClick={handleGoogleSignin}>
          <FaGoogle /> Login with Google
        </button>
        <button className="btn" onClick={handleGithubSignin} >
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
