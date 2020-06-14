import React, { useEffect } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/ui";

import { Container, TextField, Button } from "@material-ui/core/";
import { useForm } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
const FormModal = ({ action, data, error, type, closeModal }) => {
  const classes = useStyles();
  const { handleSubmit, register, errors, watch, setError } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: data?.name || "",
      family_name: data?.family_name || "",
      email: data?.email || "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (error.name) {
      setError(error.filed, "notMatch", error.message);
      // closeModal(false);
    }
  }, [error, setError, closeModal]);

  //dispatch signup action
  const onSubmit = async (formData) => {
    if (type === "update") {
      //dispatch update action
      await action(formData, data.id);
    } else {
      //dispatch create action
      await action(formData);
    }
  };
  return (
    <div>
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
          {type !== "update" ? (
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
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
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                inputRef={register({
                  required: "password is required",
                  validate: (value) =>
                    value === watch("password") || "The passwords do not match",
                })}
              />
            </>
          ) : null}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {type}
          </Button>
        </form>
      </Container>
    </div>
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

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { closeModal })(FormModal);
