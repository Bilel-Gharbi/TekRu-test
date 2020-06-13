import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/user";
import { logout } from "../actions/auth";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core/";

import NavBar from "../components/NavBar";
import Table from "../components/Table";

const DashboardPage = ({ getAllUsers, data, logout }) => {
  useEffect(() => {
    //call actions fetch all user
    getAllUsers();
  }, [getAllUsers]);
  //memo
  const columns = React.useMemo(
    () => [
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
            accessor: "last_Login",
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
              <IconButton
                aria-label="delete"
                style={{ textAlign: "center" }}
                onClick={() => console.log("test")}
              >
                <EditIcon />
              </IconButton>
            ),
          },
          {
            Header: "Delete",
            accessor: "Delete",
            Cell: (row) => (
              <IconButton
                aria-label="update"
                style={{ textAlign: "center" }}
                onClick={() => console.log("test")}
              >
                <DeleteIcon />
              </IconButton>
            ),
          },
        ],
      },
    ],
    []
  );
  return (
    <>
      <NavBar logout={logout} />
      DashboardPage
      <Table data={data} columns={columns} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.users.data,
  };
};

export default connect(mapStateToProps, { getAllUsers, logout })(DashboardPage);
