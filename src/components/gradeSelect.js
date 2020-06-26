import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Box from '@material-ui/core/Box'
import CircularStatic from './circleProgress'
import { GradeContext } from '../GradeContext'

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
let range = n => [...Array(n).keys()]

export default function SimpleSelect () {
  const classes = useStyles()
  const {grade} = useContext(GradeContext)
  const [grades, setGrades] = grade
  // const [currentGrades, setGrade] = React.useState([])

  useEffect(() => {
    // console.log(currentGrades)
    console.log(grades)
  }, [grades])

  const updateGrade = (s, event) => {
    console.log(event.target.value)
    console.log(s)
    let tmpArr = [...grades]
    tmpArr[s] = event.target.value
    // setGrade(tmpArr)
    setGrades(tmpArr)
  }

  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center' m={1} p={1}>
      {range(6).map(s => (
        <div>
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id='simple-select-label'>Course {s + 1}</InputLabel>
              <Select
                labelId='simple-select-label'
                id='simple-select'
                onChange={(s, event => updateGrade(s, event))}
              >
                {possibleGrades.map(grade => (
                  <MenuItem value={grade}>{grade}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <CircularStatic val={10 * grades[s]} />
        </div>
      ))}
    </Box>
  )
}
