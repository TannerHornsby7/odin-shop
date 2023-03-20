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

test("shop now button navigates on click", () => {
    // render the app component
    render(<App />);
    // check if the home page is rendered
    expect(screen.getByText("Shop Now")).toBeTruthy();
    // click the shop now button
    act(()=>{
        userEvent.click(screen.getByText("Shop Now"));
    });
    // check if the catalog page is rendered
    expect(screen.getByText("BANANA")).toBeTruthy();
});


/* Lines 20 - * are testing the Catalog page */

// check that the catalog page renders correctly
// by simulating navigation to the page and 
// checking that the page renders correctly
test("catalog page renders correctly", () => {
    // render the app component
    render(<Catalog />);
    // check if the catalog page is rendered
    expect(screen.getByText("BANANA")).toBeTruthy();
    });