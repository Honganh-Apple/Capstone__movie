import React from "react";
import Header from "../Components/HeaderTheme/Header";
import FooterHa from "../Components/Footer/FooterHa";
// export default function Layout({ chilren }) {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// }
export default function Layout({ Component }) {
  return (
    <div className="space-y-10">
      <Header />
      <div className="">{<Component />}</div>
      <FooterHa />
    </div>
  );
}
