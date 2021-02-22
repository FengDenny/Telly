import "./css/App.css";
import "./css/index.css";
import "./css/MediaQueries.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Join from "./auth/Join";
import Home from "./booking/Home";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='App-content'>
          <Route path='/' component={Navbar} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/join' component={Join} />
          </Switch>
        </div>
        <Route path='/' component={Footer} />
      </div>
    </Router>
  );
}

export default App;
