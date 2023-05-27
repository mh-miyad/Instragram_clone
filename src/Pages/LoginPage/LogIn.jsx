import React from "react";
import Lefsite from "../../components/logImg/Lefsite";
import FormLog from "../../components/LoginCom/FormLog";
import FooterCom from "../../components/FooterCom/FooterCom";


const LogIn = () => {
  return (
   <>
    <div className=" flex justify-center">
      <div className=" block md:flex  items-center">
        <div className="hidden md:block max-w-md">
          <Lefsite />
        </div>
        <div className=" p-10">
          <FormLog />
        </div>
      </div>
    </div>
    <FooterCom/>
   
   </>
  );
};

export default LogIn;
