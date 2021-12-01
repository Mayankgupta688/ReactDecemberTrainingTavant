import Axios from "axios";
import React from "react";

export class SBIStockComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            stockUrls: [{
                name: "NAC",
                Url: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC",
                price: 0,
            }, {
                name: "SBI",
                Url: "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI",
                price: 0
            }]
        }

        setInterval(() => {
            this.state.stockUrls.forEach((stock) => {
                Axios.get(stock.Url).then((response) => {

                    var newStockData = this.state.stockUrls.map((inputStock) => {
                        if(inputStock.name === response.data.data.symbol) {
                            inputStock.price = response.data.data.pricecurrent
                        }
                        return inputStock;
                    })

                    this.setState({
                        stockUrls: newStockData
                    })
                })
            })
        }, 2000);
    }

    render() {
        return (
            <div>
                {this.state.stockUrls.map((stock) => {
                    return (
                        <div>
                            <h1>Sock Name: {stock.name}</h1>
                            <h2>Stock Price: {stock.price}</h2>
                        </div>
                    )
                })}
            </div>
        )
    }
}