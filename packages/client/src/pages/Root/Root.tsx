import { FC, useState } from 'react'
import styles from './Root.module.scss'
import { Card } from '@mui/material'
import MainCardHeader from './components/MainCardHeader'
import { Outlet } from 'react-router'

const Root: FC = () => {
  const [pageName, setPageName] = useState('')

  return (
    <Card variant="outlined" className={styles.wrapper}>
      <MainCardHeader pageName={pageName} />
      <Outlet context={setPageName} />
    </Card>
  )
}

export default Root
