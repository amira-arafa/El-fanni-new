import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messages from "./assets/Local/messages";
import SignUp from "./containers/SignUp/SignUp";
import SignIn from "./containers/SignIn/SignIn";
import EmailConfirmMsg from "./containers/EmailConfirmMsg/EmailConfirmMsg";
import PasswordConfirmMsg from "./containers/PasswordConfirmMsg/PasswordConfirmMsg";
import ForgetPasswordEmail from "./containers/ForgetPassword/ForgetPasswordEmail";
import ForgetPasswordPassword from "./containers/ForgetPassword/ForgetPasswordPassword";
import HomePage from "./containers/HomePage/HomePage";
import SearchResults from "./containers/SearchResults/SearchResults";
import CoursePage from "./containers/CoursePage/CoursePage";
import CourseDetails from "./containers/CourseDetails/CourseDetails";
import AboutUs from "./containers/AboutUs/AboutUs";
import Profile from "./containers/Profile/Profile";
import EditProfile from "./containers/EditProfile/EditProfile";
import Collection from "./containers/Collection/Collection";
import Cart from "./containers/Cart/Cart";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "./routes/History";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { requestFirebaseNotificationPermission } from "./firebaseInit";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "./scss/_general.scss";
import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { locale, auth } = useSelector((state) => state);
  const { lang } = locale;
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (auth.loading) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [auth.loading]);

  requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      localStorage.setItem("firebaseToken", firebaseToken);
    })
    .catch((err) => {
      return err;
    });

  const includePath = (path) => {
    return window.location.pathname.includes(path);
  };

  return (
    <div className={loader ? "app-opacity" : ""}>
      <GoogleOAuthProvider clientId="661780234238-bmagndqkhr4jv0km57quejl8tt82u42s.apps.googleusercontent.com">
        <div
          className={lang === "ar" ? "rtl" : "ltr"}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <IntlProvider locale={lang} messages={messages[lang]}>
            <Router history={history}>
              {!(
                window.location.pathname === "/" ||
                includePath("/course-details/") ||
                includePath("/sign-up") ||
                includePath("/sign-in") ||
                includePath("/forget-password") ||
                includePath("/check-email") ||
                includePath("/confirm-password") ||
                includePath("/forget-password-email")
              ) && <Header />}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route exact path="/sign-in" element={<SignIn />} />
                <Route
                  exact
                  path="/forget-password-email"
                  element={<ForgetPasswordEmail />}
                />
                <Route
                  exact
                  path="/forget-password/:token"
                  element={<ForgetPasswordPassword />}
                />
                <Route
                  exact
                  path="/check-email"
                  element={<EmailConfirmMsg />}
                />
                <Route
                  exact
                  path="/confirm-password"
                  element={<PasswordConfirmMsg />}
                />
                <Route exact path="/course/:id" element={<CoursePage />} />
                <Route
                  exact
                  path="/course-details/:id"
                  element={<CourseDetails />}
                />
                <Route exact path="/about-us" element={<AboutUs />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/profile-edit" element={<EditProfile />} />
                <Route exact path="/collection/:id" element={<Collection />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/search-results/:q" element={<SearchResults />} />
              </Routes>
              {!(
                includePath("/course-details/") ||
                includePath("/sign-up") ||
                includePath("/sign-in") ||
                includePath("/forget-password") ||
                includePath("/check-email") ||
                includePath("/confirm-password") ||
                includePath("/forget-password-email")
              ) && <Footer />}
            </Router>
          </IntlProvider>
        </div>
        <ToastContainer />
        {loader && (
          <div className="overlay-loader">
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
