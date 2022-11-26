import React from "react";
import format from "date-fns/format";
import threeWings from "../../assets/img/3wings.png";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BackArrow } from "../../assets/svg/BackArrow.svg";
import { ReactComponent as Calendar } from "../../assets/svg/Calendar.svg";
import { ReactComponent as ClockSimple } from "../../assets/svg/ClockSimple.svg";

function TascomFooter({ className }) {
  const [time, setTime] = React.useState(format(new Date(), "HH:mm"));
  const [date, setDate] = React.useState(format(new Date(), "dd/MM/yyyy"));
  const url = useLocation();

  React.useEffect(() => {
    const seconds = 30 * 1000;

    const interval = setInterval(() => {
      const timeDate = format(new Date(), "H:mm");
      const hours = Number.parseInt(timeDate.split(":")[0]);
      setTime(timeDate);

      if (hours === 0) {
        setDate(format(new Date(), "dd/MM/yyyy"));
      }
    }, seconds);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={`w-full max-h-28 flex items-end ${className}`}>
      <div
        className="h-13 w-52 relative flex justify-start items-center"
        style={{
          backgroundColor: "#12151D",
          clipPath: "polygon(0 0, 75% 0, 100% 100%, 0 100%)",
        }}
      >
        <Link to="/">
          <div className="flex items-center">
            <img src={threeWings} alt="tascom logo" className="w-24 h-7 ml-5" />
            {url?.pathname !== "/" && <BackArrow className="w-8 h-8" />}
          </div>
        </Link>
      </div>
      <div
        className="w-full h-12 -ml-8 flex items-center justify-end"
        style={{
          backgroundColor: "#181C26",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 3.5% 100%)",
        }}
      >
        <div className="flex items-center gap-8 mr-5">
          <div className="flex items-center gap-1">
            <Calendar className="w-6 h-6" />
            <span className="text-white text-xl">{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockSimple className="w-6 h-6" fill="#FFF" />
            <span className="text-white text-xl">{time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default TascomFooter;
