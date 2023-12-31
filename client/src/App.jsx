import './App.css'
import Navbar from './components/navbar'
import AppRoutes from './components/navbar/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </>

  )
}

export default App
