import React, { useContext } from 'react'
import InputField from './components/input'
import SimpleSelect from './components/gradeSelect'
import { CircularProgress, Divider } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import CircularStatic from './components/circleProgress'
import './App.css'
import {GradeContext} from './GradeContext'

export default function AppWrapper(){

    const {semSG, sem} = useContext(GradeContext)

    const [sg, setSG] = semSG
    const [cg, setCG] = sem

    return (
        <div className='App'>
        <InputField />
        <SimpleSelect />
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
                {/* <CircularProgress size={50} value={59} /> */}
                <CircularStatic val={(10*sg)}  />
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
                {/* <CircularProgress size={50} value={59} /> */}
                <CircularStatic val={(10*cg)} />

              </Box>
            </Box>
          </Box>
        </div>
      </div>
    )
}