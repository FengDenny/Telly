import "./css/App.css";
import "./css/index.css";
import "./css/MediaQueries.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./pages/components/PrivateRoute";
// components
import Login from "./pages/auth/Login";
import Join from "./pages/auth/Join";
import Home from "./pages/cover/Home";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";
import Page from "./pages/components/pageTitle";
import UserDashboard from "./pages/user/UserDashboard";
import UserSellerDashboard from "./pages/user/UserSellerDashboard";
import HotelBooking from "./pages/booking/HotelBooking";
import AddHotel from "./pages/hotel/NewHotels";
import StripeCallback from "./pages/stripe/StripeCallback";

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
              <Route
                exact
                path='/hotel_booking'
                render={(props) => (
                  <Page title='Telly | Book your hotel'>
                    <HotelBooking {...props} />
                  </Page>
                )}
              />
              <Route
                exact
                path='/hotels/new'
                render={(props) => (
                  <Page title='Telly | Add new hotel'>
                    <AddHotel {...props} />
                  </Page>
                )}
              />
              <Route
                exact
                path='/stripe/callback'
                render={(props) => (
                  <Page title='Telly | Stripe Callback'>
                    <StripeCallback {...props} />
                  </Page>
                )}
              />
              <PrivateRoute
                exact
                path='/user_dashboard'
                render={(props) => (
                  <Page title='Users dashboard | Telly'>
                    <UserDashboard {...props} />
                  </Page>
                )}
              />
              <PrivateRoute
                exact
                path='/user_dashboard/seller'
                render={(props) => (
                  <Page title='Users seller dashboard | Telly'>
                    <UserSellerDashboard {...props} />
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
