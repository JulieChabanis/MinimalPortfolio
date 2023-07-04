import { Box, IconButton, Link, Typography, useTheme, Grid } from '@mui/material';
import React, { forwardRef, useState } from 'react';
import styles from './Portfolio.module.css';
import Content from './Content';
import GitHubIcon from "@mui/icons-material/GitHub";
// import { tokens } from '../../Theme/theme';

import PaddingResizeSection from '../../hooks/PaddingResizeSection';

const Portfolio = forwardRef(() => {
  const theme = useTheme();
  const [ items, setItems ] = useState(Content);
  const filterItem = (categoryItem) => {
    const updatedItems = Content.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }

  return (
    <Box id="portfolio-section" sx={{ padding: PaddingResizeSection() }}>
      <Box sx={{ fontSize: theme.typography.h8, marginBottom: "3rem" }}>
        <Box className={styles.titleSection}>
          {'• Portfolio'}
        </Box>
        <Box className={styles.itemsFilter}>
          <Typography component="span" className={styles.itemSection} onClick={() => setItems(Content)}>Everything</Typography>
          <Typography component="span" className={styles.itemSection} onClick={() => filterItem("Creative")}>Creative</Typography>
          <Typography component="span" className={styles.itemSection} onClick={() => filterItem("Illustrations")}>Illustrations</Typography>
          <Typography component="span" className={styles.itemSection} onClick={() => filterItem("Programming")}>Programming</Typography>
        </Box>

        <Grid container spacing={3} className={styles.itemContainer}>
          {items.map((element) => {
            const { id, image, title, category } = element;
            return (
              <Grid item  xs={12} sm={6} md={4} className={styles.itemCard} key={id}>
                  <img src={image} alt="" className={styles.ItemImg} />
                  <Box className={styles.itemMask}></Box>

                <Typography className={styles.itemCategory}>{category}</Typography>
                <Typography className={styles.itemTitle}>{title}</Typography>
                <Link href="#" className={styles.itemButton}>
                    <IconButton className={styles.iconLink}>
                     <GitHubIcon />
                    </IconButton>
                </Link>

              </Grid>
            )

          })}

        </Grid>


      </Box>
    </Box>
  )
})

export default Portfolio;
