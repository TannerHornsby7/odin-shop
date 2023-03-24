// create a cart component that displays an array of cards from its props
import { Link } from "react-router-dom";
import CheckCard from "../components/CheckCard";
import { useState, useEffect } from "react";
import emerald from "../assets/emerald.png";
import "../styles/Cart.css";

export default function Cart(props) {
    // get cart from context
    const cart = props.cart;
    // create a state variable to store the total price
    const [totalPrice, setTotalPrice] = useState(0);
    // create a function to calculate the total price
    const calculateTotalPrice = () => {
        // create a variable to store the total price
        let total = 0;
        // loop through the cart and add the price of each item to the total
        cart.forEach((item) => {
        total += item.price * item.cquantity;
        });
        // update the total price state variable
        setTotalPrice(total);
    };
    // call the calculateTotalPrice function when the cart changes
    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);
    return (
        <div className="body">
        <h2>Cart</h2>
        <div className="cart">
            {cart.map((item) => (
            <CheckCard
                item={item}
                addCardItem={props.addCardItem}
            ></CheckCard>
            ))}
        </div>
        <div className="total-price">
            <h4>Total Price: <img alt='emerald' src={emerald}></img>{parseInt(totalPrice)}</h4>
        </div>
        <Link to="/checkout" className="btn btn-secondary">
            Checkout
        </Link>
        </div>
    );
    }