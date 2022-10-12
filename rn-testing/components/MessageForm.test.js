import React from "react";
import MessageForm from "./MessageForm";
import { render, screen, fireEvent } from "@testing-library/react-native";

test("clicking send clears the input field", () => {
  // Arrange
  render(<MessageForm />);

  // Act
  fireEvent.changeText(
    screen.getByPlaceholderText("Message"),
    "Hello Howdens!"
  );
  fireEvent.press(screen.getByText("Send"));

  // Assert
  expect(screen.getByPlaceholderText("Message")).toHaveTextContent("");
  expect(screen.getByPlaceholderText("Message")).toHaveProp("value", "");
});

test("our send message function is called", () => {
  // Arrange
  const sendHandler = jest.fn();
  const testMessage = "Hello from Jest";
  render(<MessageForm onSend={sendHandler} />);

  // Act
  fireEvent.changeText(screen.getByPlaceholderText("Message"), testMessage);
  fireEvent.press(screen.getByText("Send"));

  // Assert
  expect(sendHandler).toHaveBeenCalledWith(testMessage);
});
