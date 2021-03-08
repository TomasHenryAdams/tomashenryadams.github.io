import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/about";
import Articles from "./components/articles";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Header from "./components/header";

const Routing = () => {
    return (
      <Router>
        <Header />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects/test" component={About} />
        <Route exact path="/articles/test" component={About} />
      </Router>
    );
  };

export default Routing;
