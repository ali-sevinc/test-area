/// <reference types="@testing-library/jest-dom" />
import { render, screen } from "@testing-library/react";

import Posts from "./Posts";

describe("Async post component test", () => {
  test("renders posts", async () => {
    window.fetch = jest.fn();
    (window.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({
        posts: [
          { id: 1, title: "Test Post 1" },
          { id: 2, title: "Test Post 2" },
          { id: 3, title: "Test Post 3" },
        ],
      }),
      ok: true,
      status: 200,
    } as Response);

    render(<Posts />);

    const listItemElements = await screen.findAllByRole("listitem");
    console.log("🔥🔥🔥List elements.", listItemElements.length);
    expect(listItemElements).not.toHaveLength(0);
  });
});
