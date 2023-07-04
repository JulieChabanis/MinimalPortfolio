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
        <Box 
          className={styles.itemsFilter}
        >
          <Typography variant="h10" component="span" className={styles.itemSection} onClick={() => setItems(Content)}>Everything</Typography>
          <Typography variant="h10" component="span" className={styles.itemSection} onClick={() => filterItem("Creative")}>Creative</Typography>
          <Typography variant="h10" component="span" className={styles.itemSection} onClick={() => filterItem("Illustration")}>Illustration</Typography>
          <Typography variant="h10" component="span" className={styles.itemSection} onClick={() => filterItem("Programming")}>Programming</Typography>
        </Box>

          <Grid container className={styles.itemContainer}>
            {items.map((element) => {
              const { id, image, title, category } = element;
              return (
                <Grid 
                  item  xs={12} sm={5} md={3} lg={3} 
                  className={styles.itemCard} 
                  key={id}
                >
                  <Box className={styles.itemImgContainer}>
                    <img src={image} alt="" className={styles.itemImg} />
                  </Box>
                    <Box className={styles.itemMask}></Box>

                  <Typography variant="h13" className={styles.itemCategory}>{category}</Typography>
                  <Typography variant="h12" className={styles.itemTitle}>{title}</Typography>
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
