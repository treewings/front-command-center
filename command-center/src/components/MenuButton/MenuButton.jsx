import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as AreaChart } from "../../assets/svg/AreaChart.svg";

const MenuButton = ({
  to = "#",
  icon,
  style,
  className,
  textClass,
  children,
  ...props
}) => {
  return (
    <NavLink
      to={to}
      style={style}
      className={`w-full bg-blackCMDC rounded-lg bg-opacity relative flex justify-start items-end group-hover: transition delay-150 opacity-60 hover:opacity-100  border-2 hover:border-green-800 border-transparent ${className}`}
      {...props}
    >
      <div className="absolute top-2 right-2 w-auto h-auto">{icon}</div>
      <span className={`text-white text-xslg uppercase ml-2 mb-2 ${textClass}`}>
        {children}
      </span>
      <AreaChart className="w-full h-2/3 absolute bottom-0" />
    </NavLink>
  );
};

export default MenuButton;
