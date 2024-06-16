import styles from "./Button.module.css";
const Button = ({ buttonName, handleClickButton }) => {
  return (
    <>
      <button
        key={buttonName}
        className={styles.button}
        onClick={handleClickButton}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Button;
