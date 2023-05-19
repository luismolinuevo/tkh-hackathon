import {useEffect, useState} from "react";

const useWeatherInfo =(city) => {
    //This is only for mvp purposes. Keys should be stored on the backend
    const API_KEY = "cbff09427ba24b14aff150129231905"
    const WEATHER_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    const [weatherInfo, setWeatherInfo] = useState({loading: true})

    useEffect(() => {
        console.log('rendering...')
        if (!city) return
        const successCallback = (data) => {
            const {current: {temp_f: temperature, humidity}} = data
            setWeatherInfo({
                loading: false,
                temperature,
                humidity
            })
        }
        const errorCallback = (error) => {
            setWeatherInfo({loading: false, error})
        }

        fetch(WEATHER_URL)
            .then(response => {
            response.json().then(successCallback)
            })
            .catch(errorCallback)
    }, [city])

    return weatherInfo
}


export default useWeatherInfo