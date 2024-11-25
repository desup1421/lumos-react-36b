/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "../../components/context/UserList";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          name: "John Doe",
        },
      ]),
  });
});

describe("UserList component", () => {
    test("render user list", async () => {
        render(<UserList />);
        const userList = await screen.findByText("John Doe");
        expect(userList).toBeInTheDocument();
    })
})
