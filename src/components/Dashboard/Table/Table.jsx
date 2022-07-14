import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import "./Table.css";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import { API_URL } from "../../api/api";

const Table = () => {

    //get employees
    const [employees, setEmployees] = useState({});

    //get employees
    const getEmployees = async () => {
        const response = await fetch(`${API_URL}/api/getemployee`);
        const data = await response.json();
        setEmployees(data);
    }
     
    useEffect(() => {
    getEmployees();
    }, []);


  const handleDelete = async (_id) => {
    try{
    const response = await fetch(`${API_URL}/api/deleteemployee/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 400 || !response) {
      window.alert("There was an error deleting the customer");
    }
    else {
      window.alert("Employee customer");
        getEmployees();
    }
  } catch(err) {
    console.log(err);
  }
  };

  


  
  const column = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "empname", headerName: "Name", width: 180 },
    {
      field: "profilepic",
      headerName: "Profile Picture",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.profilepic} alt="profilepic" />
          </div>
        );
      },
    },
    { field: "empphone", headerName: "Phone", width: 160 },
    {
      field: "empwork",
      headerName: "Department",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/" + params.row._id} state={params.row} >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => window.confirm("Are you sure you want to delete this customer?") && handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='EmpList'>
      <div style={{display: "flex", justifyContent: "space-between", margin: "10px"}}>
        <span><b>Customer List</b></span>
        <Link to="/dashboard/addcustomer" className='link' >
        <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
        Add Customer
      </Button>
      </Link>
      </div>
      <DataGrid
        style={{ height: "420px" }}
        rows={employees}
        disableSelectionOnClick
        columns={column}
        pageSize={8}
        getRowId={(r) => r._id}
      />
        </div>
  )
}

export default Table;