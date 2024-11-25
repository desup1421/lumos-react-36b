/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe("Header component", () => {
    test("check h1 tag", () => {
        render(<Header />);
        const header = document.querySelector("h1");
        expect(header).toBeInTheDocument();
    });

    test("match snapshot", () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
})