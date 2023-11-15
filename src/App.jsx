import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Settings from './pages/SettingsPage/Settings'
import AllWords from './pages/AllWordsPage/AllWords'
import Login from './pages/LoginPage/Login'
import SignUp from './pages/SignupPage/SignUp'
import Dashboard from './pages/DashboardPage/Dashboard'
import LessonParameters from './pages/LessonPage/LessonParameters'
import Learn from './pages/LessonPage/Learn'
import Check from './pages/LessonPage/Check'
import LessonResult from './pages/LessonPage/LessonResult'
import AdminPanel from './pages/AdminPanelPage/AdminPanel'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchWords } from './redux/slices/wordsSlice'
import { fetchLessonSettings } from './redux/slices/lessonSettingsSlice'

function App() {
  const userId = useSelector(state => state.user.currentUser && state.user.currentUser.uid)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  // Fetching the lesson settings from the database when the component mounts
  useEffect(() => {
    if (userId) {
      dispatch(fetchLessonSettings(userId))
    }
  }, [dispatch, userId])


  function RequireAuth({ children }) {
    return userId ? children : <Navigate to='/login' />
  }

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/lesson/parameters' element={<LessonParameters />} />
        <Route path='/lesson/learn' element={<Learn />} />
        <Route path='/lesson/check' element={<Check />} />
        <Route path='/lesson/result' element={<LessonResult />} />
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