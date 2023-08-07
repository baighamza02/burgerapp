import { useSelector } from "react-redux";
//import TestComponent from "./test";
import './styles/bill.css'

function Checkout() {
    const billData = useSelector((state) => state.bill);

    return (
        <div className="bill">
            <h1>Bill</h1>
            <div className="bill-container">

                <div className="bill-item">
                    <span className="item-name">Patty</span>
                    <span className="item-quantity">{billData.itemCount.patty}</span>
                </div>
                <div className="bill-item">
                    <span className="item-name">Cheese</span>
                    <span className="item-quantity">{billData.itemCount.cheese}</span>
                </div>
                <div className="bill-item">
                    <span className="item-name">Salad</span>
                    <span className="item-quantity">{billData.itemCount.salad}</span>
                </div>
                
                <div className="bill-total">
                    <span className="total-label">Total:</span>
                    <span className="total-amount">${billData.total}</span>
                </div>
            </div>
        </div>


    )
}

export default Checkout;