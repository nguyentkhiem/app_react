import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
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
    margin: theme.spacing(3),
    minWidth: "calc(100% - 50px)",
  },
}));

const MENU = [
  {name: 'breakfast', value: 1},
  {name: 'lunch', value: 2},
  {name: 'dinner', value: 3},
]

export default function SelectMeal() {
  const classes = useStyles();
  const [meal, setMeal] = React.useState('');
  const [openMeal, setOpenMeal] = React.useState(false);
  const [number, setNumber] = React.useState('');

  const handleChangeMeal = (event) => {
    setMeal(event.target.value);
  };

  const handleCloseMeal = () => {
    setOpenMeal(false);
  };

  const handleOpenMeal = () => {
    setOpenMeal(true);
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
            <label className="text-black"><span className="text-danger">*</span> Please Select a meal : </label>
          </Grid>
          <Grid item xs={3}>
            <Select
              className="select-custom"
              open={openMeal}
              onClose={handleCloseMeal}
              onOpen={handleOpenMeal}
              onChange={handleChangeMeal}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {MENU && MENU.map((item, index) => (
                <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            {/* <label><Translation>{t => t('title_age')}</Translation></label> */}
            <label className="text-black"><span className="text-danger">*</span> Please Enter Number of people : </label>
          </Grid>
          <Grid item xs={3} className="width-100">
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
    </div>
  );
}
