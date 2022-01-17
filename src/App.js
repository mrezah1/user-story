import Theme from "components/Theme";
import Users from "components/Users";
import { useTheme } from "context/ThemeProvider";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`container ${theme}`}>
      <Theme />
      <h1>Users Story🤩</h1>
      <Users />
    </div>
  );
}

export default App;
