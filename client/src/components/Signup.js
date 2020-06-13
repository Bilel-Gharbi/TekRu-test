import React, { useEffect } from "react";
import { Container, TextField, Button } from "@material-ui/core/";
import { useForm } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";

const Signup = ({ error, action }) => {
  const classes = useStyles();
  const { handleSubmit, register, errors, watch, setError } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      family_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (error.name === "signup") {
      //set error get from reducer using setError function from react-hooks from
      setError(error.filed, "notMatch", error.message);
    }
  }, [error, setError]);

  //dispatch signup action
  const onSubmit = (data) => action(data);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="User name"
            name="name"
            error={!!errors.name}
            helperText={errors.name?.name}
            inputRef={register({
              required: "user name is required",
            })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="family_name"
            label="Family name"
            name="family_name"
            error={!!errors.family_name}
            helperText={errors.family_name?.family_name}
            inputRef={register({
              required: "user last name is required",
            })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            inputRef={register({
              required: "password is required",
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
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
export default Signup;
