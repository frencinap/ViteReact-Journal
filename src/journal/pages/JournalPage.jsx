import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelected } from '../views/NothingSelected'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eos doloribus aspernatur, ab consequatur ratione suscipit officia totam labore harum rerum dolores a. Repellendus architecto rem eius vitae sint suscipit!
      </Typography> */}
      <NothingSelected />
    </JournalLayout>
    
  )
}
