import "./App.scss";

import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import Header from "./components/header/Header";
import AboutPage from "./pages/about";
import ContactMePage from "./pages/contact-me";
import HomePage from "./pages/home";
import ContactBubble from "./components/cta-contact-bubble/ContactBubble";
import Footer from "./components/footer/Footer";

import { homeURL, aboutURL, contactMeURL } from "./utilities/URLS";

function App() {
  useEffect(() => {
    function setHeight() {
      const pixelHeight = window.innerHeight / 100;
      const root = document.querySelector(":root");

      if (root) root.style.setProperty("--vh", `${pixelHeight}px`);
    }
    // Broswer height fix not curently working.
    if (typeof window === undefined)
      return console.error("Window is not defined");

    setHeight();

    window.addEventListener("resize", setHeight);

    return () => window.removeEventListener("resize", setHeight);
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />

        <Switch>
          <Route exact path={homeURL} component={HomePage} />
          <Route path={aboutURL} component={AboutPage} />
          <Route path={contactMeURL} component={ContactMePage} />

          {/* <Route path={"/test"} component={TestPage} /> */}
        </Switch>

        <Footer />
        <ContactBubble />
      </BrowserRouter>
    </div>
  );
}

export default App;
