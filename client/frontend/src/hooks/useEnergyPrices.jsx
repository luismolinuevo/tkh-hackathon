import { useEffect, useState } from "react";
import axios from "axios";
const useEnergyPrices = () => {
  const URL = `https://cors-anywhere.herokuapp.com/https://hourlypricing.comed.com/api?type=currenthouraverage`;
  // const URL = `https:/hourlypricing.comed.com/api?type=currenthouraverage`
  const [priceInfo, setPriceInfo] = useState({ loading: true });

  useEffect(() => {
    const getPrice = async () => {
      try {
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_SERVER}/comed`,
        });

        setPriceInfo({ loading: false });
        if (response) {
          const data = response.data;
          console.log(response.data.price);
          setPriceInfo({
            price: data.price,
            loading: false,
          });
        }
      } catch (e) {
        console.log(e);
      }
    };

    getPrice();

    // const successCallback = async (response) => {
    //     const data = await response.json()
    //     setPriceInfo({
    //         loading: false,
    //         price: `${data[0]?.price}`
    //     })
    // }

    // const errorCallback = (error) => {
    //     setPriceInfo({
    //         loading: false,
    //         error
    //     })
    // }

    // fetch(URL).then(successCallback).catch(errorCallback)
  }, []);

  return priceInfo;
};

export default useEnergyPrices;
