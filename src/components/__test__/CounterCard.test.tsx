import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import CounterCard from "../CounterCard";

// Test type: This is primarily a component test because it renders one React component and checks its visible output.
// Unit tests check isolated logic, component tests check one rendered UI component, and integration tests check multiple parts working together.

describe("CounterCard", () => {
  it("renders the heading and initial counter value", () => {
    const html = renderToStaticMarkup(<CounterCard />);

    expect(html).toContain("React Counter");
    expect(html).toContain("Count: 0");
  });
});
