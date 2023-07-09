import { Box, Grid } from '@mui/material'
import React from 'react'
// import styles from './SkillsSection.module.css';

const SkillsSection = () => {

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box>Programming</Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box>Graphic Design</Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box>Others</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SkillsSection