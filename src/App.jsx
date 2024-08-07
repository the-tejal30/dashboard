import React from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main_content}>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App
