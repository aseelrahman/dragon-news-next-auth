"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "@/components/shared/NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log(user, isPending, "user");
  return (
    <div className="flex justify-between container mx-auto mt-6">
      <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      {isPending ? <span className="loading loading-bars loading-lg"></span> : user ? (
        <div className="flex justify-center items-center gap-4">
          <h2>Hello {user?.name}</h2>
          <Image
            src={user?.image || userAvatar}
            alt="User avatar"
            width={40}
            height={40}
          />
          <button onClick={async () => await authClient.signOut() } className="btn bg-purple-500 text-white">Logout</button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
