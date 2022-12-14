import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "./App.css";
import "./scss/_general.scss";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from "./routes/History";

function App() {
  const { locale } = useSelector((state) => state);
  const { lang } = locale;

  return (
    <div>
      <IntlProvider locale={lang} messages={messages[lang]}>
        <Router history={history}>
          <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route  path="/sign-up" element={<SignUp />} />
            <Route exact path="/sign-in" element={<SignIn />} />
            <Route exact path="/forget-password-email" element={<ForgetPasswordEmail />} />
            <Route exact path="/forget-password" element={<ForgetPasswordPassword />} />
            <Route exact path="/check-email" element={<EmailConfirmMsg />} />
            <Route exact path="/confirm-password" element={<PasswordConfirmMsg />} />
            <Route exact path="/search-results" element={<SearchResults />} />
            <Route exact path="/course" element={<CoursePage />} />
            <Route exact path="/course-details" element={<CourseDetails />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/profile-edit" element={<EditProfile />} />
            <Route exact path="/collection" element={<Collection />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </IntlProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
