import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { getAllUsers, addUser, deleteUser, updateUser } from "../actions/user";
import { logout } from "../actions/auth";

import { Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonAdd from "@material-ui/icons/PersonAdd";
import DescriptionIcon from "@material-ui/icons/Description";

import CustomModal from "../components/common/CustomModal";
import ActionButton from "../components/common/ActionButton";
import FormModal from "../components/common/FormModal";

import NavBar from "../components/NavBar";
import Table from "../components/Table";

const DashboardPage = ({
  getAllUsers,
  data,
  logout,
  addUser,
  ui,
  updateUser,
  deleteUser,
}) => {
  useEffect(() => {
    //call actions fetch all user
    getAllUsers();
  }, [getAllUsers]);

  //memo
  const columns = useMemo(() => {
    return [
      {
        Header: "user information ",
        columns: [
          {
            Header: "First Name",
            accessor: "name",
          },
          {
            Header: "Last Name",
            accessor: "family_name",
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "last_Login",
            accessor: (el) => {
              if (!el.last_Login) return "no yet logged";
              else return new Date(el.last_Login).toLocaleString();
            },
          },
        ],
      },
      {
        Header: "Actions",
        columns: [
          {
            Header: "Update",
            accessor: "Update",
            Cell: (row) => (
              <>
                <CustomModal
                  form={true}
                  title={"Update User"}
                  Body={
                    <FormModal
                      data={row.row.original}
                      type="update"
                      action={updateUser}
                    />
                  }
                  Btn={
                    <ActionButton>
                      <DescriptionIcon />
                    </ActionButton>
                  }
                />
              </>
            ),
          },
          {
            Header: "Delete",
            accessor: "Delete",
            Cell: (row) => (
              <>
                <ActionButton action={() => deleteUser(row.row.original.id)}>
                  <DeleteIcon />
                </ActionButton>
              </>
            ),
          },
        ],
      },
    ];
  }, [deleteUser, updateUser]);

  return (
    <>
      <NavBar logout={logout} />
      <div>
        <div style={{ justifyContent: "center" }}>
          <CustomModal
            form={true}
            toggle={ui.modal}
            title={"Create User"}
            Body={<FormModal type="Create" action={addUser} />}
            Btn={
              <ActionButton>
                <div>
                  <PersonAdd />
                  <Typography> Add User </Typography>
                </div>
              </ActionButton>
            }
          />
        </div>
        <div style={{ margin: "20px" }}>
          <Table data={data} columns={columns} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.users.data,
    error: state.error,
    ui: state.ui,
  };
};

export default connect(mapStateToProps, {
  getAllUsers,
  logout,
  addUser,
  deleteUser,
  updateUser,
})(DashboardPage);
