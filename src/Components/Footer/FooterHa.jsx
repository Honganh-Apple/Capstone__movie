import React from "react";
import { iconNet, textFooter } from "./FooterDetails";
const Contact = () => {
  return (
    <div className="bg-[#6283cccc]">
      <div className="max-w-layout mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col space-y-2">
            <h2 className="text-title font-semibold text-xl z-10 w-full text-white">
              Contact Us
            </h2>
            <div className="flex gap-2 w-full justify-start">
              {iconNet.map(({ id, icon, style, link }) => (
                <div
                  key={id}
                  className={
                    `cursor-pointer hover:-translate-y-1 hover:shadow-lg duration-200` +
                    "" +
                    style
                  }
                >
                  <a href={link} target="_blank">
                    {icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          {textFooter.map(({ brand, content }, index) => (
            <div key={brand + toString(index)}>
              <h3 className="font-bold text-lg mb-2 text-white">{brand}</h3>
              {content.map((item, index) => (
                <h4 key={index} className="cursor-pointer text-white">
                  {item}
                </h4>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
