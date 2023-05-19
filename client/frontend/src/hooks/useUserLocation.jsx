import {useEffect, useState} from "react";

const useUserLocation = () => {
    const [city, setCity] = useState()
    const [state, setState] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const successCallback = async ({coords}) => {
            console.log(coords)
            const {latitude, longitude} = coords
            const location = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            const {address: {city, state}} = await location.json()
            setLoading(false)
            setCity(city)
            setState(state)
        }
        const errorCallback = (error) => {
            setError(error)
        }

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    })

    return {city, state, error, loading}

}

export default useUserLocation