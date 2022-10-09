import React from "react";
import FooterHa from "../Components/Footer/FooterHa";
import Header from "../Components/HeaderTheme/Header";

export default function LoginRegister({ Component }) {
  return (
    <div className="h-screen w-screen">
      <Header />
      <div className=""> {<Component />}</div>
      <div className="fixed bottom-0 w-full">
        <FooterHa />
      </div>
    </div>
  );
}
