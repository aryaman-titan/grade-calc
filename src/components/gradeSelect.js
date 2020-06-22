import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

const possibleGrades = [10, 9, 8, 7, 6, 5, 4, 'S']

export default function SimpleSelect ({ keyC }) {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='simple-select-label'>Course {keyC + 1}</InputLabel>
        <Select
          labelId='simple-select-label'
          id='simple-select'
          value={age}
          onChange={handleChange}
        >
          {possibleGrades.map(grade => (
            <MenuItem value={grade}>{grade}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
