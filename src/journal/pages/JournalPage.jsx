import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelected  } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eos doloribus aspernatur, ab consequatur ratione suscipit officia totam labore harum rerum dolores a. Repellendus architecto rem eius vitae sint suscipit!
      </Typography> */}
      <NothingSelected />
      {/* <NoteView /> */}
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.7 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined  sx={{ fontSize: 32}}  />
      </IconButton>
    </JournalLayout>
    
  )
}
