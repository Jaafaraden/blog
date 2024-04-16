import{useState, useEffect} from 'react'

const useFecth = (url) =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () =>{
        try {
            const reponse = await fetch(url)
            const data = await reponse.json()
            setData(data)
            setData(false)
        } catch(error) {
            console.log(error)
            setLoading(false)
        }
    }
useEffect(() =>{
    fetchData()
}, [])

return {data, loading}
}
export default useFetch;