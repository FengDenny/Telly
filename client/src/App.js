import "./css/App.css";
import "./css/index.css";
import "./css/MediaQueries.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/auth/Login";
import Join from "./pages/auth/Join";
import Home from "./pages/cover/Home";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";
import Page from "./pages/components/pageTitle";

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='App-content'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Page title='Telly | Join for free or Login '>
                  <Home {...props} />
                </Page>
              )}
            />
            <Fragment>
              <Navbar />
              <Route
                exact
                path='/login'
                render={(props) => (
                  <Page title='Login to Telly'>
                    <Login {...props} />
                  </Page>
                )}
              />
              <Route
                exact
                path='/join'
                render={(props) => (
                  <Page title='Join Telly for free'>
                    <Join {...props} />
                  </Page>
                )}
              />
            </Fragment>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
