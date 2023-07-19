import express from "express";
import axios from "axios";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios({
      method: "get",
      url: "http://programs.dsireusa.org/api/v1/getprogramsbydate/20150325/20170514/json",
    });

    console.log(response);

    if (response) {
      res.status(200).json({
        dsire_response: response.data.data,
      });
    }
    // res.status(200).json({
    //   dsire_response: response,
    // });
    // const data = response.data
    // res.status(200).json({
    //     time: data[0].millisUTC,
    //     price: data[0].price
    // })
  } catch (e) {
    console.log(e);
  }
});

export default router;
