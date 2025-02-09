import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import EnteringLoader from "./components/EnteringLoader";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import ProjectDescription from "./pages/ProjectDescription";
import Resume from "./pages/Resume";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <EnteringLoader />
      ) : (
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route
              exact
              path="/projects/:name"
              component={ProjectDescription}
            />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </>
      )}
    </div>
  );
};

export default App;
