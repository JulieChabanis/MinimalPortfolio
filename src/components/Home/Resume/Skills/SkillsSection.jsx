import { Box, Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import styles from './SkillsSection.module.css'
import AddIcon from '@mui/icons-material/Add';
import { motion } from "framer-motion";

const SkillsSection = () => {
  const theme = useTheme();

  return (
    <Box className={styles.skillsSection}>
      <Typography variant="h21">{"Skills"}</Typography>

      <Box className={styles.skillsElements}>

        {/*Programming Card*/}
        <Grid item xs={12} sm={12} md={12} lg={3.66} xl={3.66}>
          <motion.div whileHover={{scale: 1.02,}}>
            <Box
                className={styles.skillsCardsItem}
                sx={{
                  border: theme.palette.mode === 'dark' ? '1px solid grey' : '1px solid rgba(0, 0, 0, 0.1)',
                  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : 'inherit',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(135deg, #a3c0ff, #B799FF, #cde7e6), url("https://grainy-gradients.vercel.app/noise.svg")',
                    backgroundBlendMode: 'multiply',
                  },
                }}
            >
              <Typography variant="h22" className={styles.skillsTitle}>Programming</Typography>
              <Box
              className={styles.skillsGroup}>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"HTML CSS"}</Typography>
                      <Typography variant="h24">{"Responsive Web Design, CSS frameworks (Bootstrap, MUI)"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"JavasScript"}</Typography>
                      <Typography variant="h24">{"ES6+, DOM manipulation, Axios, async programming"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"React JS"}</Typography>
                      <Typography variant="h24">{"React Router, Hooks, component lifecycle, state management"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"JAVA"}</Typography>
                      <Typography variant="h24">{"Object-oriented programming, data structures, algorithms"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"Spring / SpringBoot"}</Typography>
                      <Typography variant="h24">{"MVC architecture, RESTful APIs"}</Typography>
                    </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/*Creating Card*/}
        <Grid item xs={12} sm={12} md={12} lg={3.66} xl={3.66}>
          <motion.div whileHover={{scale: 1.02,}}>
            <Box
                className={styles.skillsCardsItem}
                sx={{
                  border: theme.palette.mode === 'dark' ? '1px solid grey' : '1px solid rgba(0, 0, 0, 0.1)',
                  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : 'inherit',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(135deg, #a3c0ff, #B799FF, #cde7e6), url("https://grainy-gradients.vercel.app/noise.svg")',
                    backgroundBlendMode: 'multiply',
                  },
                }}
            >
              <Typography variant="h22" className={styles.skillsTitle}>Creating</Typography>
              <Box
              className={styles.skillsGroup}>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"DPT - PAO"}</Typography>
                      <Typography variant="h24">{"Adobe Illustrator, Indesign, Photosop. Print/Digital Layout Design, creation of vector illustrations"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"UI/UX Design"}</Typography>
                      <Typography variant="h24">{"Adobe XD - Figma. Wireframes, mockups, interactive prototypes"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"Design Thinking"}</Typography>
                      <Typography variant="h24">{"Brainstorming, User Journey Mapping, Persona Analysis, Ecosystem Mapping..."}</Typography>
                    </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/*Other Card*/}
        <Grid item xs={12} sm={12} md={12} lg={3.66} xl={3.66}>
          <motion.div whileHover={{scale: 1.02,}}>
            <Box
                className={styles.skillsCardsItem}
                sx={{
                  border: theme.palette.mode === 'dark' ? '1px solid grey' : '1px solid rgba(0, 0, 0, 0.1)',
                  backgroundColor: theme.palette.mode === 'dark' ? '#121212' : 'inherit',
                  '&:hover': {
                    backgroundImage: 'linear-gradient(135deg, #a3c0ff, #B799FF, #cde7e6), url("https://grainy-gradients.vercel.app/noise.svg")',
                    backgroundBlendMode: 'multiply',
                  },
                }}
            >
              <Typography variant="h22" className={styles.skillsTitle}>Other</Typography>
              <Box
              className={styles.skillsGroup}>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"Development Strategy"}</Typography>
                      <Typography variant="h24">{"Market Research, Benchmarking, SWOT Analysis, Technical specifications"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography variant="h23">{"Brand Image"}</Typography>
                      <Typography variant="h24">{"Visual Identity, Logo, Brand Strategy, Positioning"}</Typography>
                    </Box>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>
    </Box>
    </Box>
  )
}

export default SkillsSection