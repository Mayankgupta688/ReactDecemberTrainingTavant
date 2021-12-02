import Axios from "axios";
import { useState } from "react";

export default function SBIStockHookComponent() {
    var [ sbiStockPrice, setSbiStockPrice ]= useState(0);

    setTimeout(() => {
        Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) => {
            var price = response.data.data.pricecurrent;
            setSbiStockPrice(price);
        });
    }, 1000)

    return (
        <h1>Stock Price for SBI is {sbiStockPrice}</h1>
    )
}