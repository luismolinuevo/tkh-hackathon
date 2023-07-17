import express from "express";
import axios from "axios"
const router = express.Router();

router.get("/", async (req, res) => {
    
        try {
            const response = await axios({
                method: "get",
                url: 'https:/hourlypricing.comed.com/api?type=currenthouraverage'
            })

            const data = response.data
            res.status(200).json({
                time: data[0].millisUTC,
                price: data[0].price
            })
            
        } catch (e) {
            console.log(e)
        }
});


export default router
