import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContext, {AuthContextProvider} from "./components/context/authContext";
import { ShoppingState } from "./components/shopping/ShoppingState";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ShoppingState>
        <App />
      </ShoppingState>
    </AuthContextProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
