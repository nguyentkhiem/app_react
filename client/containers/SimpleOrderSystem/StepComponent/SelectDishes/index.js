import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { Translation } from "react-i18next";
import TextField from '@material-ui/core/TextField';
import '../../index.scss';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: "24px 0px",
    minWidth: "calc(100% - 50px)",
  },
}));

const MENU = [
  {name: 'Egg Muffin', value: 1},
]

export default function SelectDishes() {
  const classes = useStyles();
  const [dish, setDish] = React.useState('');
  const [openDish, setOpenDish] = React.useState(false);
  const [number, setNumber] = React.useState('');
  const [showFields, setShowFields] = React.useState(false);

  const handleChangeDish = (event) => {
    setDish(event.target.value);
  };

  const handleCloseDish = () => {
    setOpenDish(false);
  };

  const handleOpenDish = () => {
    setOpenDish(true);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            {/* <label><Translation>{t => t('title_age')}</Translation></label> */}
            <label className="text-black">Please Select a Dish</label>
          </Grid>
          <Grid item xs={3}>
            <label className="text-black">Please enter no. of servings</label>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </FormControl>
		{
			showFields ? (
				<FormControl className={classes.formControl}>
					<Grid container spacing={3}>
					<Grid item xs={3}></Grid>
					<Grid item xs={3}>
						<Select
						className="select-custom"
						open={openDish}
						onClose={handleCloseDish}
						onOpen={handleOpenDish}
						onChange={handleChangeDish}
						>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{MENU && MENU.map((item, index) => (
							<MenuItem key={index} value={item.value}>{item.name}</MenuItem>
						))}
						</Select>
					</Grid>
					<Grid item xs={3}>
						<TextField
						id="outlined-number"
						label="Number"
						type="number"
						InputLabelProps={{
							shrink: true,
						}}
						variant="outlined"
						onChange={handleChangeNumber}
						/>
					</Grid>
					<Grid item xs={2}></Grid>
					</Grid>
				</FormControl>
			) : (
				<div className="div-btn-add-field">
					<Button variant="contained" onClick={() => setShowFields(true)} className="btn-add-field">
						Add field
					</Button>
				</div>
			)
		}
	  <div className="block-warning">
		  <p className="text-danger">
		  	The total number of dishes should be greater or equal to the number of person and a maximum of 10 is allowed. So should be 5 ~ 10.
		  </p>
	  </div>
    </div>
  );
}
