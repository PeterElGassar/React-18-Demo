import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "danger" | "warning" | "default";
  handelClick: () => void;
}
const Button = ({ children, color = "default", handelClick }: Props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={handelClick}
    >
      {children}
    </button>
  );
};

export default Button;
