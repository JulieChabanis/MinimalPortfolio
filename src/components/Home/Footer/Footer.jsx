import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {

  return (
    <Box
     sx={{ 
      display: 'flex',
      justifyContent: 'center',
      padding: '30px',
    }}
    >
      <Typography variant="h27">
        {"©2023 - Create from scratch with my beloved associate, Léon the pug"}
      </Typography>
    </Box>
  )
}

export default Footer