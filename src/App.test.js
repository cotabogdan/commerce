import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import NavBar from "./Components/NavBar";
import store from "./redux/store";
import { addProduct, removeProduct } from "./redux/cartRedux";
import { act } from "react-dom/test-utils";
import CartComponent from "./Components/CartComp";
test("renders the homepage", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const links = screen.getAllByRole("link");
  links.forEach((link) => expect(link).not.toBeDisabled());
});

test("add action", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  act(() => {
    store.dispatch(addProduct({ id: 1, price: "30$" }));
  });
  expect(store.getState().cart.products).not.toBeNull();
  expect(store.getState().cart.products[0].price).toEqual("30$");
});

test("remove action", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  act(() => {
    store.dispatch(removeProduct({ id: 1, price: "30$" }));
  });
  expect(store.getState().cart.products.length).toEqual(0);
});

test("that add function puts correct data", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  act(() => {
    store.dispatch(addProduct({ id: 1, price: "30$" }));
  });
  expect(store.getState().cart.products[0].price).toEqual("30$");
  expect(store.getState().cart.total).toEqual(30);
});
test("cart page is not empty", () => {
  render(
    <Provider store={store}>
      <CartComponent />
    </Provider>,
  );
  expect(screen.getByText("30$")).toBeInTheDocument();
});
test("remove action total price", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  act(() => {
    store.dispatch(removeProduct({ id: 1, price: "30$" }));
  });
  expect(store.getState().cart.total).toEqual(0);
});
