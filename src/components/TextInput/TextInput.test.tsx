import React from "react";
import { render } from "@testing-library/react";

import TextInput from "./TextInput";

describe("Button", () => {
  test("renders the TextInput component", () => {
    render(<TextInput label="Hello world!" />);
  });
});
