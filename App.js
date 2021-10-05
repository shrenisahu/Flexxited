import "./App.css";
import "./Style.css";
import logo from "./Images/Summer.png";
import logo2 from "./Images/MainLogo.png";
import { data } from "./Database";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo-div">
          <img src={logo2} className="main-logo" />
          <div className="feature-div">
            <BsSearch className="side-logo" />
            <FiUser className="side-logo" />
            <AiOutlineShoppingCart className="side-logo" />
            <MdNotificationsNone className="side-logo" />
          </div>
        </div>
      </header>
      <div className="navbar-div">
        {data.map((props) => (
          <p className="nav-component">{props}</p>
        ))}
      </div>

      <div className="App">
        <img src={logo} style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default App;
