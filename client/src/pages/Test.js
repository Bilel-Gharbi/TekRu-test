import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/user";
import FormModal from "../components/common/FormModal";
import CustomModal from "../components/common/CustomModal";

import { Button } from "@material-ui/core";
const Test = ({ addUser }) => {
  return (
    <div>
      <CustomModal
        form={true}
        title={"Create User"}
        Body={<FormModal type="Create" action={addUser} />}
        Btn={
          <Button variant="outlined" color="primary">
            Create new user
          </Button>
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addUser })(Test);
