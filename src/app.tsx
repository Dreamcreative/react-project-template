import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './global.less'

const App = () => {
  return (
    <div className={styles['app']}>
      <span>Hello React</span>
    </div>
  )
}
const root = document.getElementById('root')
ReactDOM.createRoot(root).render(<App />)
