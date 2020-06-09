import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function Review(props) {
  const classes = useStyles();
  const { data, setData } = props;

  useEffect(() => {
      console.log(props)
  }, []);

  return data && (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Meal</TableCell>
            <TableCell align="right">No. of. People</TableCell>
            <TableCell align="right">Restaurant</TableCell>
            <TableCell align="right">Dishes</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
			<TableRow>
				<TableCell>Meal</TableCell>
      <TableCell align="left">{data.meal.value || ''}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>No. of. People</TableCell>
				<TableCell align="left">{data.meal.number || 0}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Restaurant</TableCell>
				<TableCell align="left">{data.restaurant.value || ''}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Dishes</TableCell>
				<TableCell align="left"><label className="label-review">{`${data.dish.value || ''} - ${data.dish.number || 0}`}</label></TableCell>
			</TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
