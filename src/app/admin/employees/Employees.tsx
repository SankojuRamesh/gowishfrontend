import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import ApiAxios from "../../modules/auth/core/ApiAxios";
import Table from "react-bootstrap/Table";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const EmployeesPage = () => {
  const [employeeData, setEmployeeData] = useState<any>([])
  useEffect(() => {
    getEmployeeData();
  }, []);

  const data = [
    {
      id: 5,
      name: "Suresh",
      email: "suresh@example2.com",
      address: null,
      contact: null,
      roles: 2,
      is_active: true,
    },
    {
      id: 6,
      name: "Sureshs",
      email: "sureshs@example2.com",
      address: null,
      contact: null,
      roles: 2,
      is_active: false,
    },
    {
      id: 7,
      name: "AmeerpetStore",
      email: "ameer@example.com",
      address: null,
      contact: null,
      roles: 2,
      is_active: true,
    },
    {
      id: 8,
      name: "AmeerpetStore",
      email: "ameersss@example.com",
      address: null,
      contact: null,
      roles: 2,
      is_active: true,
    },
  ];

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 150,
      },
      {
        accessorKey: "contact", //normal accessorKey
        header: "Contact",
        size: 200,
      },
      {
        accessorKey: "is_active",
        header: "City",
        Cell: (cell) => {
          return cell.row.original.is_active ? (
            <span className="bg-light-success p-1 rounded text-success">
              Active
            </span>
          ) : (
            <span className="bg-light-danger p-1 rounded text-danger">
              In Active
            </span>
          );
        },
        size: 150,
      },
    ],
    []
  );

  const getEmployeeData = async () => {
    // const getData = await ApiAxios.get(`employee_list/`);
    axios.get('http://3.88.186.149:3000/employee_list/').then(resp => {
      setEmployeeData(resp.data)
    })
    // console.log("ascasca", getData);
  };
  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnActions: false,
    enableSorting: false,
    enableTopToolbar: false,
  });
  return (
    <div>
      {/* <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData?.map(item => <tr>
                        <td className="fs-5">{item.name}</td>
                        <td className="fs-5">{item.email}</td>
                        <td className="fs-5">{item.contact}</td>
                        <td className="fs-5">{item.is_active ? 
                            <span className="bg-light-success p-1 rounded text-success">Active</span> : 
                            <span className="bg-light-danger p-1 rounded text-danger">In Active</span>
                            }</td>
                    </tr>
                    )}
                </tbody>
        </Table> */}
      {/* <MaterialReactTable table={table} /> */}
      
      <div className="container mt-4">
      <div className="row p-10">
        {employeeData?.map((item: any, i: any) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
            <Card style={{ width: "18rem" }} className="p-4 shadow-sm w-100">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/736x/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.jpg"
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.email}</Card.Text>
                <Card.Text>{item.contact}</Card.Text>
                {/* <Button variant="primary">{item.contact}</Button> */}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
