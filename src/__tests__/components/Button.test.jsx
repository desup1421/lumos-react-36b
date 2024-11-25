/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

describe("Button component", () => {
    test("render button", () => {
        render(<Button label="Click me" />);
        const button = screen.getByText("Click me");
        expect(button).toBeInTheDocument();
    });
})