import { Box, Grid, Typography} from '@mui/material'
import React from 'react'
import styles from './SkillsSection.module.css'
import AddIcon from '@mui/icons-material/Add';
import { motion } from "framer-motion";

const SkillsSection = () => {

  return (
    <Box className={styles.skillsSection}>
      <Typography className={styles.sectionWorkText} variant="h21">{"Skills"}</Typography>

      <Box className={styles.skillsElements}>
      <Grid container gap={3}>

        {/*Programming Card*/}
        <Grid item xs={12} sm={12} md={12} lg={3.66} xl={3.66}>
          <motion.div
              whileHover={{ scale: 1.04}}
              className={styles.skillsCardsItem}
          >
            <Typography variant="h16" className={styles.skillsTitle}>Programming</Typography>
            <Box
            className={styles.skillsGroup}>
              <Box className={styles.skillsItemListing}>
                <AddIcon className={styles.skillsIcon} />
                  <Box className={styles.skillsItem}>
                    <Typography variant="h14">{"HTML CSS"}</Typography>
                    <Typography variant="h6">{"Responsive Web Design, CSS frameworks (Bootstrap, MUI)"}</Typography>
                  </Box>
              </Box>
              <Box className={styles.skillsItemListing}>
                <AddIcon className={styles.skillsIcon} />
                  <Box className={styles.skillsItem}>
                    <Typography variant="h14">{"JavasScript"}</Typography>
                    <Typography variant="h6">{"ES6+, DOM manipulation, Axios, async programming"}</Typography>
                  </Box>
              </Box>
              <Box className={styles.skillsItemListing}>
                <AddIcon className={styles.skillsIcon} />
                  <Box className={styles.skillsItem}>
                    <Typography variant="h14">{"React JS"}</Typography>
                    <Typography>{"React Router, Hooks, component lifecycle, state management"}</Typography>
                  </Box>
              </Box>
              <Box className={styles.skillsItemListing}>
                <AddIcon className={styles.skillsIcon} />
                  <Box className={styles.skillsItem}>
                    <Typography variant="h14">{"JAVA"}</Typography>
                    <Typography variant="h6">{"Object-oriented programming, data structures, algorithms"}</Typography>
                  </Box>
              </Box>
              <Box className={styles.skillsItemListing}>
                <AddIcon className={styles.skillsIcon} />
                  <Box className={styles.skillsItem}>
                    <Typography variant="h14">{"Spring / SpringBoot"}</Typography>
                    <Typography variant="h6">{"MVC architecture, RESTful APIs"}</Typography>
                  </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>

        {/*Creating Card*/}
        <Grid item xs={12} sm={12} md={12} lg={3.66} xl={3.66}>
          <motion.div
            whileHover={{ scale: 1.04 }} 
            className={styles.skillsCardsItem}>
              <Typography variant="h16" className={styles.skillsTitle}>Creating</Typography>
              <Box className={styles.skillsGroup}>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography >{"DTP - PAO"}</Typography>
                      <Typography>{"Adobe Illustrator, Indesign, Photosop. Print and Digital Layout Design, creation of vector illustrations"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography>{"UI/UX Design"}</Typography>
                      <Typography>{"Adobe XD - Figma. Wireframes, mockups, interactive prototypes"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography>{"Design Thinking"}</Typography>
                      <Typography>{"Brainstorming, User Journey Mapping, Persona Analysis, Ecosystem Mapping, Prototyping, User Testing"}</Typography>
                    </Box>
                </Box>
              </Box> 
          </motion.div>
        </Grid>

        {/*Other Card*/}
        <Grid item xs={12} sm={12} md={12} lg={3.66} xl={3.66}>
          <motion.div 
            whileHover={{ scale: 1.04 }}
            className={styles.skillsCardsItem}>
              <Typography variant="h16" className={styles.skillsTitle}>Other</Typography>
              <Box className={styles.skillsGroup}>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography>{"Development Strategy"}</Typography>
                      <Typography>{"Market Research, Benchmarking, SWOT Analysis, Technical specifications, Solutions"}</Typography>
                    </Box>
                </Box>
                <Box className={styles.skillsItemListing}>
                  <AddIcon className={styles.skillsIcon} />
                    <Box className={styles.skillsItem}>
                      <Typography>{"Brand Image"}</Typography>
                      <Typography>{"Visual Identity, Logo, Brand Strategy, Positioning, Perceived Image, Communication Strategy"}</Typography>
                    </Box>
                </Box>
              </Box>
            </motion.div>
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default SkillsSection