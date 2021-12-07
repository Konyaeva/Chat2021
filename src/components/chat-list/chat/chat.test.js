import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../../utils/render-with-redux";
import { Chat } from "./chat";

let state = null;

// @TODO протестировать кнопку удаления

beforeEach(() => {
  state = {
    messages: {
      messages: {
        room1: [{ author: "user", message: "test" }],
      },
    },
  };
});

describe("chat component", () => {
  it("should render Chat with room1 title", () => {
    const { container } = renderWithRedux(<Chat title="room1" />, state);

    const nodes = [...container.querySelectorAll(".text")];

    expect(nodes[0]).toHaveTextContent("room1");
  });

  it("should render Chat with selected props", () => {
    const { getByRole } = renderWithRedux(
      <Chat title="room1" selected={true} />,
      state
    );

    expect(getByRole("button")).toHaveClass("Mui-selected");
  });

  it("should render Chat with handleListItemClick props", () => {
    const handleListItemClick = jest.fn();

    const { getByRole } = renderWithRedux(
      <Chat title="room1" handleListItemClick={handleListItemClick} />,
      state
    );

    userEvent.click(getByRole("button"));

    expect(handleListItemClick).toBeCalledTimes(1);
  });
});
