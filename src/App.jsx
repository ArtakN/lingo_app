import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import LearnWords from './pages/LearnPage/LearnWords'
import CheckWords from './pages/CheckPage/CheckWords'
import Settings from './pages/SettingsPage/Settings'
import AllWords from './pages/AllWordsPage/AllWords'
import Login from './pages/LoginPage/Login'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignupPage/SignUp'
import Dashboard from './pages/DashboardPage/Dashboard'
import { useSelector } from 'react-redux'
import LessonParameters from './pages/LearnPage/LessonParameters'
import AdminPanel from './pages/AdminPanelPage/AdminPanel'

function App() {

  const currentUser = useSelector(state => state.user.currentUser)

  function RequireAuth({ children }) {
    return currentUser ? children : <Navigate to='/login' />
  }

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/lesson-parameters' element={<LessonParameters />} />
        <Route path='/words/learn' element={<LearnWords />} />
        <Route path='/words/check' element={<CheckWords />} />
        <Route path='/allwords' element={<AllWords />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App