import Button from "./Button.jsx";
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ handleClickButton }) => {
  const buttonNames = [
    "C",
    "*",
    "+",
    "<=",
    "/",
    "-",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <Button
          key={buttonName}
          buttonName={buttonName}
          handleClickButton={() => handleClickButton(buttonName)}
        />
      ))}
    </div>
  );
};

export default ButtonsContainer;
