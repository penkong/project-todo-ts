import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
//
import { Navbar } from "./layouts/Navbar";
import ErrorBoundary from "./components/ErrorBoundry";
import Spinner from "./components/Spinner";
import { AppDiv } from "./styled/styled-components/App";

// make lazy loading
const LandingPage = lazy(() => import("./pages/LandingPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

class App extends React.Component {
  // componentDidMount() {
  //   if (this.props.token) {
  //     history.push('/userland');
  //   }
  // }

  renderNav(): JSX.Element | void {
    if (window.location.pathname === "/") return;
    else return <Navbar />;
  }

  render() {
    return (
      <AppDiv>
        {this.renderNav()}
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </AppDiv>
    );
  }
}

export default App;
