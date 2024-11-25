/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../components/context/themeContext';
import ThemeButton from '../../components/context/ThemeButton';

describe("Theme button component", () => {
    test("render button with correct background color", () => {
        render(
            <ThemeProvider value="red">
                <ThemeButton />
            </ThemeProvider>
        )
        screen.debug();
        const button = screen.getByText("Click Me");
        expect(button).toHaveStyle("background-color: red");
    })
})