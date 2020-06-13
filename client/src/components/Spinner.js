import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const Spinner = () => {
  const classes = useStyles();
  return (
    <CircularProgress disableShrink className={classes.spinner} size="100px" />
  );
};
export default Spinner;

const useStyles = makeStyles((theme) => ({
  spinner: {
    position: "absolute",
    top: "30%",
    left: "50%",
  },
}));
