import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Settings from './pages/SettingsPage/Settings'
import AllWords from './pages/AllWordsPage/AllWords'
import Login from './pages/LoginPage/Login'
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
import { fetchVocabulary } from './redux/slices/dashboardSlice'

function App() {

  // Selectors to get the current user
  const currentUser = useSelector(state => state.auth.currentUser)
  const userId = currentUser ? currentUser.uid : null

  // Hook for dispatching actions
  const dispatch = useDispatch();

  // Fetching the words from the database when the component mounts
  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  // Fetching the lesson settings from the database when the component mounts
  useEffect(() => {
    if (userId) {
      dispatch(fetchLessonSettings(userId))
    }
  }, [dispatch, userId])

  //  Fetching vocabulary (learned words)
  useEffect(() => {
    dispatch(fetchVocabulary(userId))
  }, [userId])

  // Function to check if the user is authenticated
  function RequireAuth({ children }) {
    return userId ? children : <Navigate to='/login' />
  }

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allwords' element={<AllWords />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminPanel />} />
        <Route path='/lesson/parameters' element={
          <RequireAuth >
            <LessonParameters />
          </RequireAuth>}
        />
        <Route path='/lesson/learn' element={
          <RequireAuth >
            <Learn />
          </RequireAuth>}
        />
        <Route path='/lesson/check' element={
          <RequireAuth >
            <Check />
          </RequireAuth>}
        />
        <Route path='/lesson/result' element={
          <RequireAuth >
            <LessonResult />
          </RequireAuth>}
        />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}
        />
        <Route path='/settings' element={
          <RequireAuth >
            <Settings />
          </RequireAuth>}
        />
      </Routes>
    </div>
  )
}

export default App