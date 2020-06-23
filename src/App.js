import React from 'react'
import './App.css'
import InputField from './components/input'
import SimpleSelect from './components/gradeSelect'
import { CircularProgress, Divider } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import CircularStatic from './components/circleProgress'

function App () {
  // let range = n => [...Array(n).keys()]
  const [courseGrades, setGrades] = React.useState([])

  React.useEffect(() => {
    console.log(courseGrades)
  }, [courseGrades])

  return (
    <div className='App'>
      <InputField />
      {/* <Box display='flex' flexWrap='wrap' justifyContent='center' m={1} p={1}>
        {range(6).map(s => (
          <div>
            <SimpleSelect keyC={s} />
          </div>
        ))}
      </Box> */}
      <SimpleSelect/>
      <Divider />

      <div style={{ width: '100%' }}>
        <Box
          display='flex'
          justifyContent='center'
          m={1}
          p={1}
          bgcolor='background.paper'
        >
          <Box
            display='flex'
            justifyContent='center'
            m={1}
            p={1}
            bgcolor='background.paper'
          >
            <Box p={1} alignItems='center' bgcolor='grey.300'>
              <h1> SG </h1>
            </Box>
            <Box p={3} alignContent='center' bgcolor='grey.300'>
              <CircularProgress size={50} value={59} />
            </Box>
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            m={1}
            p={1}
            bgcolor='background.paper'
          >
            <Box p={1} alignItems='center' bgcolor='grey.300'>
              <h1> CG </h1>
            </Box>
            <Box p={3} alignContent='center' bgcolor='grey.300'>
              <CircularProgress size={50} value={59} />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default App
