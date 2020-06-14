import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/ui";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomModal = ({ Btn, Body, form, title, submittedForm, closeModal }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (submittedForm) {
      setOpen(false);
    }
  }, [submittedForm]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}>{Btn}</div>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        <DialogContent>{Body}</DialogContent>
        <DialogActions>
          {!form ? (
            <>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary">
                Agree
              </Button>
            </>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    submittedForm: state.ui.submittedForm,
  };
};
export default connect(mapStateToProps, { closeModal })(CustomModal);
