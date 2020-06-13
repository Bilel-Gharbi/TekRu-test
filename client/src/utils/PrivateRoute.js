import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isLogged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
};
const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
