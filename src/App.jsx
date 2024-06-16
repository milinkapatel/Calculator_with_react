import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const handleClickButton = (buttonName) => {
    if (buttonName === "C") {
      let newCalVal = "";
      setCalVal(newCalVal);
    } else if (buttonName === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else if (buttonName === "<=") {
      let newCalVal = calVal;
      newCalVal = newCalVal.slice(0, newCalVal.length - 1);
      setCalVal(newCalVal);
    } else {
      let newCalVal = calVal + buttonName;
      setCalVal(newCalVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsContainer
        handleClickButton={(buttonName) => handleClickButton(buttonName)}
      />
    </div>
  );
}

export default App;
