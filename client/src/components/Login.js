import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, TextField, Button, CssBaseline } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";

const Login = ({ action, error }) => {
  const classes = useStyles();
  const { handleSubmit, register, errors, setError } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (error.name === "login") {
      //set error get from reducer using setError function from react-hooks from
      setError(error.filed, "notMatch", error.message);
    }
  }, [error, setError]);
  //dispatch login action
  const onSubmit = (data) => action(data);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            inputRef={register({
              required: "address mail is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            inputRef={register({
              required: "Password is required",
              validate: (value) =>
                value.length >= 8 ||
                "password should be grater than 8 characters",
            })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default Login;
