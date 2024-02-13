import React from "react";
import { useQuery } from "@apollo/client";
import QUERY_APPLICATION from "../../../utils/queries";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const ApplicationsTable = ({ jobId }) => {
  const { loading, error, data } = useQuery(QUERY_APPLICATION, {
    variables: { jobId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="applications table">
        <TableHead>
          <TableRow>
            <TableCell>Applicant Username</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Job Title</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.applications.map((application) => (
            <TableRow
              key={application._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {application.applicant.username}
              </TableCell>
              <TableCell align="right">
                {application.applicant.firstName}
              </TableCell>
              <TableCell align="right">{application.job.title}</TableCell>
              <TableCell align="right">{application.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApplicationsTable;
