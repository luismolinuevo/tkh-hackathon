import {useEffect, useState} from "react";

const useUserLocation = () => {
    const [locationInfo, setLocationInfo] = useState({loading: true})

    useEffect(() => {
        const successCallback = async ({coords}) => {
            const {latitude, longitude} = coords
            const location = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            const {address: {city, state}} = await location.json()
            setLocationInfo({
                loading: false,
                city,
                state
            })
        }
        const errorCallback = (error) => {
            setLocationInfo({
                loading: false,
                error
            })
        }

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, [])

    return locationInfo

}

export default useUserLocation