import React, { forwardRef, useState } from 'react';
import styles from './Portfolio.module.css';
import { Box, Typography, useTheme, Grid, Link } from '@mui/material';
import { tokens } from '../../Theme/theme';
import GitHubIcon from '@mui/icons-material/GitHub';

import PaddingResizeSection from '../../hooks/PaddingResizeSection';
import Content from './Content';


const Portfolio = forwardRef(() => {
  const theme = useTheme();
  const [ items, setItems ] = useState(Content);
  const [selectedItem, setSelectedItem] = useState(null);
  const colors = tokens(theme.palette.mode)

  const filterItem = (categoryItem) => {
    const updatedItems = Content.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }

  return (
    <Box id="portfolio-section">
     <Box sx={{ padding: PaddingResizeSection() }}>
      <Box sx={{ fontSize: theme.typography.h8, marginBottom: "3rem" }}>
        <Box className={styles.titleSection}>
          {'Portfolio'}
        </Box>
        <Box 
          className={styles.itemsFilter}
        >
          <Typography 
            variant="h16"
            sx={{
              "&:hover": {
                color: selectedItem === null ? colors.primary[500] : colors.primary[500]
              },
              color: selectedItem === null ? colors.primary[500] : 'inherit'
            }}
            component="span"
            className={`${styles.itemSection} ${selectedItem === null ? styles.selectedItem : ''}`}
            onClick={() => {
              setSelectedItem(null);
              setItems(Content);
            }}
          > {"Everything"}
          </Typography>
          <Typography 
            variant="h16" 
            sx={{
              "&:hover": {
                color: colors.primary[500]
              },
              color: selectedItem === 'Creative' ? colors.primary[500] : 'inherit'
            }}
            component="span"
            className={`${styles.itemSection} ${selectedItem === 'Creative' ? styles.selectedItem : ''}`}
            onClick={() => {
              setSelectedItem('Creative');
              filterItem('Creative');
            }}
          > {"Creative"}
          </Typography>
          <Typography 
            variant="h16" 
            sx={{
              "&:hover": {
                color: colors.primary[500]
              },
              color: selectedItem === 'Ui/Ux Design' ? colors.primary[500] : 'inherit'
            }}
            component="span"
            className={`${styles.itemSection} ${selectedItem === 'Ui/Ux Design' ? styles.selectedItem : ''}`}
            onClick={() => {
              setSelectedItem('Ui/Ux Design');
              filterItem('Ui/Ux Design');
            }}
          > {"Ui/Ux Design"}
          </Typography>
          <Typography 
            variant="h16" 
            sx={{
              "&:hover": {
                color: colors.primary[500]
              },
              color: selectedItem === 'Programming' ? colors.primary[500] : 'inherit'
            }}
            component="span"
            className={`${styles.itemSection} ${selectedItem === 'Programming' ? styles.selectedItem : ''}`}
            onClick={() => {
              setSelectedItem('Programming');
              filterItem('Programming');
            }}
          > {"Programming"}</Typography>
        </Box>

          <Grid container className={styles.itemContainer}>
            {items.map((element) => {
              const { id, image, title, describe, keywords, category, github, website, doc  } = element;
              return (
                <Grid 
                  item  xs={10} sm={5} md={3} lg={5} xl={10} 
                  className={styles.itemCard} 
                  key={id}
                >
                  <Box className={styles.itemImgContainer}>
                    <img src={image} alt="" className={styles.itemImg} />
                  </Box>
                    <Box style={{ background: colors.primary[400] }} className={styles.itemMask}></Box>

                  <Typography variant="h13" className={styles.itemCategory}>{category}</Typography>
                  <Typography variant="h12" className={styles.itemTitle}>{title}</Typography>
                  <Typography variant="h14" className={styles.itemDescribe}>{describe}</Typography>
                  <Typography variant="h15" className={styles.itemKeywords}>{keywords}</Typography>

                  <Box className={styles.itemLinks}>
                    {github && (
                      <Typography>
                        <Link sx={{ color: "#191919"}} href={github} target="_blank" rel="noopener noreferrer">
                          <GitHubIcon />
                        </Link>
                      </Typography>
                    )}
                    
                    {website && (
                      <Typography variant="h6">
                        <Link sx={{ color: "#191919"}} href={website} target="_blank" rel="noopener noreferrer">
                          {"See in Live ->"}
                        </Link>
                      </Typography>
                    )}
                    
                    {doc && (
                      <Typography variant="h10">
                        <Link sx={{ color: "#191919" }} href={doc} target="_blank" rel="noopener noreferrer">
                          {"Doc"}
                        </Link>
                      </Typography>
                     )}
                  </Box> 
                </Grid>
              );
            })}
          </Grid>
      </Box>
    </Box>  
    </Box>
  )
  })

export default Portfolio;
