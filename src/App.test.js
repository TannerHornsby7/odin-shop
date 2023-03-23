// create a test that checks if the home page renders correctly
// import the react testing library
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import the app component
import App from "./App";
import Catalog from "./pages/Catalog";
import { act } from "react-dom/test-utils";

// setup and teardown
let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

/* Lines 8 - * are testing the Home page */

// create a test that checks if the home page renders correctly
test("renders home page", () => {
  // render the app component
  render(<App />);
  // check if the home page is rendered
  expect(screen.getByText("Home")).toBeTruthy();
});

test("renders featured item", () => {
  // render the app component
  render(<App />);
  // check if the home page is rendered
  expect(screen.getByText("Featured Item")).toBeTruthy();
});

/* Lines 20 - * are testing the Catalog page */

// check that the catalog page renders correctly
// by simulating navigation to the page and 
// checking that the page renders correctly
test("renders catalog page", () => {
    // render the app component
    render(<App />);
    // navigate to the catalog page
    act(()=>{
        userEvent.click(screen.getByText("HOME"));
    });
    // check if the catalog page is rendered
    act(()=>{
        userEvent.click(screen.getByText("Explore Our Chest!"));
    }
    );
    // check if the catalog page is rendered
    expect(screen.getByText("Back to Home")).toBeTruthy();
});

// check that adding an item to the cart increments the cartcount div
// in the navbar
test("adding an item to the cart increments the cartcount div", () => {
    // render the app
    render(<App />);
    // navigate to home page 
    act(()=>{
        userEvent.click(screen.getByText("HOME"));
    });

    act(()=>{
        userEvent.click(screen.getAllByText("Add to Cart")[0]);
    });
    // check if the cartcount div is rendered
    expect(screen.getByText("1")).toBeTruthy();
});

// check that incrementing the cartcount div works for multiple items
test("adding multiple items to the cart increments the cartcount div", () => {
    // render the app
    render(<App />);
    // navigate to home page 
    act(()=>{
        userEvent.click(screen.getByText("HOME"));
    });

    act(()=>{
        userEvent.click(screen.getAllByText("Add to Cart")[0]);
    });

    act(()=>{
        userEvent.click(screen.getAllByText("Add to Cart")[1]);
    });
    // check if the cartcount div is rendered
    expect(screen.getByText("2")).toBeTruthy();
});