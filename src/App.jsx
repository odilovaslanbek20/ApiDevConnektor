import { useEffect, useState } from 'react'
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CreateProfile from './pages/CreateProfile'
import Dashboard from './pages/Dashboard'
import Developer from './pages/Developer'
import Header from './pages/Header'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Posts from './pages/Posts'
import PostsDetails from './pages/Details'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import User from './pages/User'

function isAuter() {
  return localStorage.getItem('token') !== null
}

function ProtectsRoute() {
  return isAuter() ? <Outlet /> : <Navigate to='/signIn' />
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function PostsLayout() {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen flex-col gap-[20px]'>
        <i className='fa-solid fa-spinner fa-spin text-[70px] text-[#17a2b8]'></i>
        <h1 className='text-3xl font-bold text-[#17a2b8]'>Loading...</h1>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='signIn' element={<SignIn />} />
          
          <Route path='profile' element={<PostsLayout />}>
            <Route index element={<Developer />} />
            <Route path=':id' element={<User />} />
          </Route>

					<Route path='posts' element={<PostsLayout />}>
            <Route index element={<Posts />} />
            <Route path=':id' element={<PostsDetails />} />
          </Route>

					<Route path='dashboard' element={<PostsLayout />}>
						<Route index element={<Dashboard />} />
						<Route path=':id' element={<CreateProfile />} />
          </Route>

          <Route element={<ProtectsRoute />}>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>

          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App