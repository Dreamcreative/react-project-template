import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './global.less'
import Index from '@/pages/index.tsx'
const App = () => {
  return (
    <div className={styles['app']}>
      <Index />
    </div>
  )
}
const root = document.getElementById('root')
ReactDOM.createRoot(root).render(<App />)
