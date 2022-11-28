import { Avatar, IconButton, Typography } from '@mui/material'
import { FC } from 'react'

const Authorized: FC = () => {
  return (
    <>
      <Typography component="div" sx={{ mr: 1 }} color="inherit">
        Ыщ
      </Typography>
      <IconButton sx={{ p: 0 }}>
        <Avatar alt="Your profile picture" src="/" />
      </IconButton>
    </>
  )
}

export default Authorized
