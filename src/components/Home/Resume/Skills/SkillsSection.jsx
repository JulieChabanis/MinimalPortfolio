import { Box, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../Theme/theme'
// import styles from './SkillsSection.module.css';

const SkillsSection = () => {
  const theme = useTheme(); 
  const colors = tokens(theme.palette.mode)

  return (
    <Box 
      sx={{
        borderRadius: '8px',
        border: `1.8px solid ${colors.primary[500]}`
      }}
    >Section</Box>
  )
}

export default SkillsSection