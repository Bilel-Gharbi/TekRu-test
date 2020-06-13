import React, { Suspense } from "react";
import store from "./store";
import { Provider } from "react-redux";

import Spinner from "./components/Spinner";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

const AuthPage = React.lazy(() => import("./pages/AuthPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/login" component={AuthPage} />
              <PrivateRoute exact path="/dashboard" component={DashboardPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </>
  );
}

export default App;
