import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, signUp } from "../actions/auth";
import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PersonAdd from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../components/Login";
import Signup from "../components/Signup";

const AuthPage = ({ login, signUp, ...props }) => {
  const classes = useStyles();
  const [register, setRegister] = useState(false);
  useEffect(() => {
    // stay connected
    if (props.isLogged) {
      props.history.push("/dashboard");
    }
  }, [props]);

  return (
    <Grid className={classes.container}>
      <Avatar className={classes.avatar}>
        {register ? <PersonAdd /> : <LockOutlinedIcon />}
      </Avatar>
      &nbsp;&nbsp;
      <Typography component="h1" variant="h5" className={classes.text}>
        {register ? "Create an account" : "Login to my account"}
      </Typography>
      {!register ? (
        <Login action={login} {...props} />
      ) : (
        <Signup action={signUp} {...props} />
      )}
      <Grid container className={classes.center}>
        <Grid item>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        &nbsp;
        <Grid item>
          <Link href="#" variant="body2" onClick={() => setRegister(!register)}>
            {!register
              ? "Don't have an account? Sign Up"
              : "Login to my account"}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "7%",
  },
  avatar: {
    margin: "auto",
    backgroundColor: theme.palette.secondary.main,
  },
  center: {
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
}));
const mapStateToProps = (state) => {
  return {
    error: state.error,
    isLogged: state.auth.isLogged,
  };
};
export default connect(mapStateToProps, { login, signUp })(AuthPage);
