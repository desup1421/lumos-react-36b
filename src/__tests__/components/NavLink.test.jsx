/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavLink from '../../components/NavLink';

describe("NavLink component", () => {
    test("render linkwith curren href", () => {
        render(
            <MemoryRouter>
                <NavLink />
            </MemoryRouter>
        );
        const link = screen.getByText("About").closest("a");
        expect(link).toHaveAttribute("href", "/about");
    });
})