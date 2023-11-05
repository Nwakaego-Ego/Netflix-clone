"use client";
import "./signin.css";
import InPut from "../Input/input";

const SignIn = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero.jpg')] bg-cover bg-no-repeat">
        <div className="bg-white h-full w-full lg:bg-opacity-50">
          Hello World
        </div>
        <InPut />
      </div>
    </>
  );
};

export default SignIn;
