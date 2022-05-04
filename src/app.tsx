import React from 'react'
import ReactDOM from 'react-dom'
import styles from './global.less'

const App = () => {
  return (
    <div className={styles['app']}>
      <span>Hello React</span>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
