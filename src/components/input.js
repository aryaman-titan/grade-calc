import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {GradeContext} from '../GradeContext'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function InputField() {
  const classes = useStyles();

  const {sem} = useContext(GradeContext)

  const [cg, setCG] = sem

  const updateCG = event => {
    setCG(event.target.value)
    console.log("CG = ", cg)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="currentCG" label="Current CG" variant="outlined" onChange={updateCG} />
    </form>
  );
}