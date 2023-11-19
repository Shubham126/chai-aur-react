import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
  return(
    <div>
      <h2>Custom App</h2>
      this is just an example to learn is the react can run like this if it runs like this it shows that App is just a function
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
    <App />
  </React.StrictMode>,
)
