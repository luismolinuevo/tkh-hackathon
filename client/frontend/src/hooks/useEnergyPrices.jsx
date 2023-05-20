import {useEffect, useState} from "react";

const useEnergyPrices = () => {
    const URL = `https://hourlypricing.comed.com/api?type=currenthouraverage`
    const [priceInfo, setPriceInfo] = useState({loading: true})

    useEffect(() => {
        const successCallback = async (response) => {
            const data = await response.json()
            setPriceInfo({
                loading: false,
                price: `${data[0]?.price}`
            })
        }

        const errorCallback = (error) => {
            setPriceInfo({
                loading: false,
                error
            })
        }

        fetch(URL).then(successCallback).catch(errorCallback)
    }, [])

    return priceInfo
}

export default useEnergyPrices