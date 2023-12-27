import './App.css'
import { Provider } from './context/resumeContext'
import Navbar from './components/navbar'
import AppRoutes from './components/navbar/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <Provider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>

  )
}

export default App
