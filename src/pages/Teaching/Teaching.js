import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    exercises: 10,
    pendingExercises: 4,
    openExercises: 2,
    inApproval: 3,
    coursesUnpaid: 1,
    coursesPaid: 3,
    coursePrice: "$300",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    exercises: 15,
    pendingExercises: 5,
    openExercises: 4,
    inApproval: 6,
    coursesUnpaid: 2,
    coursesPaid: 5,
    coursePrice: "$450",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Brown",
    exercises: 8,
    pendingExercises: 2,
    openExercises: 1,
    inApproval: 3,
    coursesUnpaid: 0,
    coursesPaid: 2,
    coursePrice: "$200",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Johnson",
    exercises: 12,
    pendingExercises: 3,
    openExercises: 5,
    inApproval: 4,
    coursesUnpaid: 3,
    coursesPaid: 4,
    coursePrice: "$400",
  },
];

const Teaching = () => {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/admin/teaching/student/${id}`);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Teaching Dashboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Exercises</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">Open</TableCell>
              <TableCell align="center">In Approval</TableCell>
              <TableCell align="center">Courses Unpaid</TableCell>
              <TableCell align="center">Courses Paid</TableCell>
              <TableCell align="center">Course Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} hover>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell align="center">{user.exercises}</TableCell>
                <TableCell align="center">{user.pendingExercises}</TableCell>
                <TableCell align="center">{user.openExercises}</TableCell>
                <TableCell align="center">{user.inApproval}</TableCell>
                <TableCell align="center">{user.coursesUnpaid}</TableCell>
                <TableCell align="center">{user.coursesPaid}</TableCell>
                <TableCell align="center">{user.coursePrice}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={true}
                    onClick={() => handleRowClick(user.id)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Teaching;
