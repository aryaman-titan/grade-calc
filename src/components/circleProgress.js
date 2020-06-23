import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function CircularProgressWithLabel (props) {
  return (
    <Box position='relative' display='inline-flex'>
      <CircularProgress variant='static' {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography variant='caption' component='div' color='textSecondary'>
          {(props.value !== 'S' && !isNaN(props.value)) ? props.value/10 : 'S'}
        </Typography>
      </Box>
    </Box>
  )
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
}

export default function CircularStatic ({val}) {
  return <CircularProgressWithLabel value={val} />
}
