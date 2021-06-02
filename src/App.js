import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
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
      <BrowserRouter>

        <Header />
        
        <Switch>
          <Route exact path={homeURL} component={HomePage} />
          <Route path={aboutURL} component={AboutPage} />
          <Route path={resumeURL} component={ResumePage} />
          <Route exact path={projectsURL} component={ProjectsPage} />
          <Route path={`${projectsURL}/:projectID`} component={ProjectPage} />
          <Route path={contactMeURL} component={ContactMePage} />
        </Switch>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
