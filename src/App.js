import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainNavbar from './components/main-navbar';
import AboutPage from './pages/about';
import ContactMePage from './pages/contact-me';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import ProjectPage from './pages/project';
import ResumePage from './pages/resume';
import { homeURL, aboutURL, resumeURL, projectsURL, contactMeURL } from './utilities/URLS';

function App() {
  return (
    <div className="App">
        {/* <AboutPage /> */}
      <BrowserRouter>
        <div className="App__main-nav">
          <MainNavbar />
        </div>
        <div className="App__content">
          <header>
            <h1>James King Portfolio</h1>
          </header>
          <MainNavbar />

          <Switch>
            <Route exact path={homeURL} component={HomePage} />
            <Route path={aboutURL} component={AboutPage} />
            <Route path={resumeURL} component={ResumePage} />
            <Route exact path={projectsURL} component={ProjectsPage} />
            <Route path={`${projectsURL}/:projectID`} component={ProjectPage} />
            <Route path={contactMeURL} component={ContactMePage} />
          </Switch>
        </div>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
