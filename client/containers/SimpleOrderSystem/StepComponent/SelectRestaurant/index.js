import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import { Translation } from "react-i18next";
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
  {name: 'Mc Donalds', value: 1},
  {name: 'Vegi Deli', value: 2},
  {name: 'Olive Garden', value: 3},
]

export default function SelectRestaurant() {
  const classes = useStyles();
  const [restaurant, setRestaurant] = React.useState('');
  const [openRestaurant, setOpenRestaurant] = React.useState(false);

  const handleChangeRestaurant = (event) => {
    setRestaurant(event.target.value);
  };

  const handleCloseRestaurant = () => {
    setOpenRestaurant(false);
  };

  const handleOpenRestaurant = () => {
    setOpenRestaurant(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Grid container spacing={3}>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}>
            {/* <label><Translation>{t => t('title_age')}</Translation></label> */}
            <label className="text-black"><span className="text-danger">*</span> Please Select a Restaurant : </label>
          </Grid>
          <Grid item xs={3}>
            <Select
              className="select-custom"
              open={openRestaurant}
              onClose={handleCloseRestaurant}
              onOpen={handleOpenRestaurant}
              onChange={handleChangeRestaurant}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {MENU && MENU.map((item, index) => (
                <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </FormControl>
    </div>
  );
}
