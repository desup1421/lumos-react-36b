/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from '../App';

describe("App component", () => {
    test("render vite logo", () => {
        render(<App />);
        const viteLogo = screen.getByAltText("Vite logo");
        expect(viteLogo).toBeInTheDocument();
    });

    test("render react logo", () => {
        render(<App />);
        const reactLogo = screen.getByAltText("React logo");
        expect(reactLogo).toBeInTheDocument();
    });

    test("display count is 0", () => {
        render(<App />);
        const count = screen.getByText("count is 0");
        expect(count).toBeInTheDocument();
    });

    test("increament count", () => {
        render(<App />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        const count = screen.getByText("count is 1");
        expect(count).toBeInTheDocument();
    });

    test("title is in document", () => {
        render(<App />);
        const title = screen.getByText("Vite + React");
        expect(title).toBeInTheDocument();
    });

    test("clik text on logo is in document", () => {
        render(<App />);
        const text = screen.getByText("Click on the Vite and React logos to learn more");
        expect(text).toBeInTheDocument();
    })
})
