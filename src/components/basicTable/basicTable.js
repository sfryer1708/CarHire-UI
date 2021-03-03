import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { YES, NO } from "../../utils/constants";

export class BasicTable extends Component {
  createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };

  render() {
    const { headers, vehicles } = this.props;

    const classes = makeStyles({
      table: {
        minWidth: 650,
      },
    });

    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow key="header">
              <TableCell key="{headers[0]}1">{headers[0]}</TableCell>
              {headers.slice(1).map((header) => (
                <TableCell key={header} align="right">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {vehicles &&
              vehicles.map((vehicle) => (
                <TableRow key="{vehicle.registration}1">
                  <TableCell component="th" scope="row">
                    <Link
                      to={{ pathname: "/hire", state: { vehicle: vehicle } }}
                    >
                      {vehicle.registration}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{vehicle.category}</TableCell>
                  <TableCell align="right">{vehicle.make}</TableCell>
                  <TableCell align="right">{vehicle.model}</TableCell>
                  <TableCell align="right">{vehicle.fuelType}</TableCell>
                  <TableCell align="right">
                    {vehicle.hired ? YES : NO}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default withRouter(BasicTable);
