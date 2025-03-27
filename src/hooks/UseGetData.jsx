import { useEffect, useState } from 'react'
import apiClient from '@/api/CustomApi'

const useGetData = (url) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await apiClient.get(url)
				setData(response.data)
			} catch (err) {
				setError(
					err.response?.data?.message || err.message || 'Something went wrong'
				)
			} finally {
				setLoading(false)
			}
		}

		fetchData()

	}, [url])

	return { data, loading, error }
}

export default useGetData
