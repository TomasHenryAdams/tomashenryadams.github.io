import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/about";
import Articles from "./components/articles";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Header from "./components/header";
import Project from "./components/projects/project";
import Article from "./components/articles/article";

const Routing = () => {
    return (
      <Router>
        <Header />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects/:projectId" component={Project} />
        <Route exact path="/articles/:articleId" component={Article} />
      </Router>
    );
  };

export default Routing;
