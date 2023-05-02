import { CssBaseline } from "@mui/material";
import "./App.css";
import { AuthContextProvider } from "./contexts/auth/AuthContextProvider";
import Routes from "./routes";
import Theme from "./theme";

function App() {
  return (
    <AuthContextProvider>
      <Theme>
        <CssBaseline />
        <Routes />
      </Theme>
    </AuthContextProvider>
  );
}

export default App;
