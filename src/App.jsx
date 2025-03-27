import { useEffect, useState } from 'react'
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom'
import CreateProfile from './pages/CreateProfile'
import Dashboard from './pages/Dashboard'
import Developer from './pages/Developer'
import Header from './pages/Header'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Posts from './pages/Posts'
import PostsDetails from './pages/PostsDetail'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import User from './pages/User'

function isAuter() {
	return localStorage.getItem('token') !== null
}

function ProtectsRoute({ children }) {
	return isAuter() ? children : <Navigate to='/signIn' />
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
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/signUp' element={<SignUp />} />
					<Route path='/signIn' element={<SignIn />} />
					<Route path='/dev' element={<Developer />} />
					<Route path='*' element={<Notfound />} />
					<Route path='/profile/:id' element={<User />} />
					<Route path='/createProfile' element={<CreateProfile />} />
					<Route path='/postsDetails/:id' element={<PostsDetails />} />

					<Route
						path='/posts'
						element={
							<ProtectsRoute>
								<Posts />
							</ProtectsRoute>
						}
					/>
					<Route
						path='/dashboard'
						element={
							<ProtectsRoute>
								<Dashboard />
							</ProtectsRoute>
						}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
