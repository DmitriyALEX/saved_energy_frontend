import styles from './App.module.css'
import Auth from './auth'
import MainPage from './components/MainPage/index.jsx'

import { UserProvider } from './context/userId.jsx'

function App() {
  return (
    <main className={styles.app}>
      <UserProvider>
        {/* MAIN */}
        <section className={styles.main}>
          <MainPage />
        </section>
        {/* AUTH */}
        <section className={styles.auth}>
          <Auth />
        </section>
      </UserProvider>
    </main>
  )
}

export default App
