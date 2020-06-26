import React, { useState, createContext, useEffect } from 'react'

export const GradeContext = createContext()

export const GradeProvider = props => {
  const [grades, setGrades] = useState([10, 9, 8, 7, 6, 'S'])
  const [sg, setSG] = useState(8)
  const [cg, setCG] = useState(8)

  const calcSG = () => {
    let sgSUM = 0,
      sgCount = 0
    // console.log(grades)
    const tmpArray = Array.from(grades)
    tmpArray.map(grade =>
      grade !== 'S' ? ((sgSUM += grade), (sgCount += 1)) : null
    )
    console.log(sgSUM, sgCount)
    return sgSUM / sgCount
  }

  const calcCG = () => {
    let sgCredit = 0
    const tmpArra = Array.from(grades)
    tmpArra.map(grade => (grade !== 'S' ? (sgCredit += 4) : null))
    console.log(sgCredit)
    return (21 * cg + sgCredit * sg) / (21 + sgCredit)
  }

  useEffect(() => {
    setSG(calcSG)
    setCG(calcCG)
    console.log(grades)
    console.log('SG = ', sg)
    console.log('CG = ', cg)
  }, [grades, sg])

  return (
    <GradeContext.Provider
      value={{ grade: [grades, setGrades], sem: [cg, setCG], semSG: [sg, setSG] }}
    >
      {props.children}
    </GradeContext.Provider>
  )
}
