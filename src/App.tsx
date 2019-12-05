import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
//
import { Navbar } from "./layouts/Navbar";
import ErrorBoundary from "./components/ErrorBoundry";
import Spinner from "./components/Spinner";
import { AppDiv } from "./styled/styled-components/AppDiv";

// make lazy loading
const Landing = lazy(() => import("./pages/Landing"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

class App extends React.Component {
  // componentDidMount() {
  //   if (this.props.token) {
  //     history.push('/userland');
  //   }
  // }

  render() {
    // const { token } = this.props;
    return (
      <AppDiv>
        <Navbar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AppDiv>
    );
  }
}

export default App;
