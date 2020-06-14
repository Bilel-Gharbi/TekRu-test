import React, { Suspense, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

import Spinner from "./components/Spinner";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { getProfile } from "./actions/auth";
import Test from "./pages/Test";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  useEffect(() => {
    store.dispatch(getProfile());
  }, []);
  return (
    <>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/login" component={AuthPage} />
              <PrivateRoute exact path="/dashboard" component={DashboardPage} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </>
  );
}

export default App;
