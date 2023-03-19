// create a basic shopping page header with buttons that: link to the home page
// the about page, and the cart page with a cart icon that
// displays the number of items in the cart

export default function Navbar(){
    return (
        <header>
            <a href="/">Home</a>
            <a href="about">About</a>
            <a href="cart">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart.png" alt="cart icon"/>
            </a>
        </header>
    );
}