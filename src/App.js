import './App.css'
import AppBar from '@mui/material/AppBar'
import TextArea from './components/AutoCorrectTextArea'

function App () {
  return (
    <div className='App'>
      <AppBar position='static' style={{ backgroundColor: '#fd5d5d' }}>
        <h2>Autocorrect-App</h2>
      </AppBar>
      <br />
      <TextArea />
    </div>
  )
}

export default App
