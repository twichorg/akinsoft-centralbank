import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import LoginPage from "./LoginPage.jsx";


test("username input should be rendered", () => {
    render(<LoginPage />);
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    expect(usernameInputEl).toBeInTheDocument();
  });
  
  test("password input should be rendered", () => {
    render(<LoginPage />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
  });