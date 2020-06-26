import React, { useState, useContext, useEffect } from 'react'
import './App.css'

import { GradeProvider, GradeContext } from './GradeContext'
import AppWrapper from './AppWrapper'

function App () {
  return (
    <GradeProvider>
      <AppWrapper />
    </GradeProvider>
  )
}

export default App
