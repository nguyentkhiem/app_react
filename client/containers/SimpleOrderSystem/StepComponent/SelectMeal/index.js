import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Translation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 300,
  },
}));

export default function SelectMeal() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
	  	<FormControlLabel
			control={
				<Select
					labelId="demo-controlled-open-select-label"
					id="demo-controlled-open-select"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={age}
					onChange={handleChange}
				>
					<MenuItem value={1}>breakfast</MenuItem>
					<MenuItem value={2}>lunch</MenuItem>
					<MenuItem value={3}>dinner</MenuItem>
				</Select>
			}
			label={<InputLabel id="demo-controlled-open-select-label"><Translation>{t => t('title_age')}</Translation></InputLabel>}
		/>
        
      </FormControl>
    </div>
  );
}
