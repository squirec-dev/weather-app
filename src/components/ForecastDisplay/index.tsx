import { ReactElement } from "react";
import Image from "next/image";
import AirIcon from "@mui/icons-material/Air";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import { ForecastDisplayProps } from "./types";

import styles from "./forecast-display.module.css";

const ForecastDisplay = ({ data }: ForecastDisplayProps): ReactElement => {
  const { location: { name, country }, current } = data;

  return (
    <>
      <h2 className={styles["forecast-display__title"]}>
        The weather is {current.condition.text.toLowerCase()} in {name}, {country}
        
        <small className={styles["forecast-display__last-updated"]}>
          Last updated {new Date(current.last_updated).toLocaleDateString()}
        </small>
      </h2>

      {current.condition.text.includes("rain") && (
        <span className={styles["forecast-display__duck-warning"]}>
          <Image
            src="/duck.svg"
            alt="logo"
            width="0"
            height="0"
            style={{ width: "20px", height: "auto" }}
            priority={true}
          />
          
          Perfect weather for ducks!
        </span>
      )}

      <ul className={styles["forecast-display__list"]}>
        <li>
          <DeviceThermostatIcon className={styles["forecast-display__icon"]} /> 
          <span className="highlight-text">
            {current.temp_f}
          </span> 
          (feels like {current.feelslike_f}) Temperature(F) 
        </li>

        <li>
          <DeviceThermostatIcon className={styles["forecast-display__icon"]} />
          <span className="highlight-text">
            {current.temp_c}
          </span>
          (feels like {current.feelslike_c}) Temperature(C) 
        </li>

        <li>
          <OpacityIcon className={styles["forecast-display__icon"]} /> 
          <span className="highlight-text">
            {current.humidity}
          </span>
          Humidity 
        </li>

        <li>
          <AirIcon className={styles["forecast-display__icon"]} /> 
          <span className="highlight-text">
            {current.wind_mph}
          </span>
          Wind(MPH) 
        </li>

        <li>
          <AirIcon className={styles["forecast-display__icon"]} /> 
          <span className="highlight-text">
            {current.wind_kph}
          </span>
          Wind(KPH)
        </li>
      </ul>
    </>
  )
}

export default ForecastDisplay;
