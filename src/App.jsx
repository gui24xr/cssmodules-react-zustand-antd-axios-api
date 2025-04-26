import { useState } from 'react'
import styles from './App.module.css'
import Form from './components/Form'
import DetailsList from './components/DetailsList'
import MyList from './components/MyList'
import DropdownMenu from './components/DropdownMenu'

function App() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <h1 className={styles.title}>Panel de Control</h1>
          <Form />
          <DropdownMenu />
        </div>
      </div>
      
      <div className={styles.mainContent}>
        <div className={styles.layout}>
          <div className={styles.leftColumn}>
            <MyList />
          </div>
          
          <div className={styles.rightColumn}>
            <DetailsList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
