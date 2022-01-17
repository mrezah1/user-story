import { ReactComponent as Light } from "assets/icons/sun.svg";
import { ReactComponent as Dark } from "assets/icons/moon.svg";
import { useTheme } from "context/ThemeProvider";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const changeThemeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="theme-icon" onClick={changeThemeHandler}>
      {theme === "light" ? <Dark /> : <Light />}
    </div>
  );
};
export default Theme;
