import { Box, Button, Typography } from '@mui/material'
import React, { forwardRef } from 'react'
import styles from './Contact.module.css'
import SendIcon from '@mui/icons-material/Send';

import PaddingResizeSection from '../../hooks/PaddingResizeSection';

const Contact = forwardRef (() => {

  return (
    <Box id="contact-section">
      <Box sx={{ padding: PaddingResizeSection()}}>

        {/*Content*/}
        <Box>
          <Box className={styles.contactBox}>
            <Typography variant="h25" className={styles.titleBox}>
              {"Interested in connecting?"}
            </Typography>
            <Typography variant="h26" className={styles.subtitleBox}>
              {"Feel free to reach out to me on LinkedIn!"}
            </Typography>
            <Button className={styles.messageButton} variant="outlined" endIcon={<SendIcon />}>
              Send me a message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
})

export default Contact;