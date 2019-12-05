import React, { Suspense } from "react";
import { Navbar } from "./layouts/Navbar";

import { Switch, Route } from "react-router-dom";
//
import Spinner from "./components/Spinner";
import ErrorBoundary from "./components/ErrorBoundry";
import Landing from "./pages/Landing";

// make lazy loading

class App extends React.Component {
  // componentDidMount() {
  //   if (this.props.token) {
  //     history.push('/userland');
  //   }
  // }

  render() {
    // const { token } = this.props;
    return (
      <div>
        <Navbar />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={Landing} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

export default App;
