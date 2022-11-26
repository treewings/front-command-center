import React from "react";
import threeWings from "../../assets/img/3wings.png";

function Footer({ className }) {
  return (
    <footer className={`w-full max-h-28 px-5 pb-2 ${className}`}>
      <div className="flex flex-row justify-end items-center max-w-7xl m-auto">
        <img src={threeWings} alt="3wings logo" className="block w-36 h-9" />
      </div>
    </footer>
  );
}

export default React.memo(Footer);
