# Individual Learning Phase: First Tests in React 19 with Vitest and React Testing Library

## Your Goal

You will set up a simple testing environment with Vitest and React Testing Library in a small React 19 project and write your own tests for a small UI component. In doing so, you will practically distinguish between unit, integration, and component tests, learn the structure of a test file, and execute your first tests yourself.

## What you need

- A runnable React 19 project, ideally with Vite
- Node.js and npm
- A code editor
- Terminal or console
- These packages in your project:
  - `vitest`
  - `@testing-library/react`
  - `@testing-library/jest-dom`
  - `@testing-library/user-event`
  - `jsdom`

## Time Planning

- 15 minutes: Check project and set up testing tools
- 20 minutes: Create a testable React component
- 20 minutes: Build the first test file and understand the structure
- 25 minutes: Write render and content tests
- 20 minutes: Test interaction
- 20 minutes: Extend, refactor, and reflect

## Basic Tasks

### Task 1:
Prepare the testing environment **Goal:** You will set up Vitest and React Testing Library in your React 19 project so that you can run tests.

**Assignment:**
- Open your React project or create a new Vite project with React.
- Install the required testing packages.
- Configure Vitest to run tests in a browser-like environment.
- Create a setup file to integrate `@testing-library/jest-dom`.
- Add a suitable test command to your project configuration.
- Start the test runner once, even if no real tests exist yet.

**Expected Result / Target State:**
- Your project contains a working test configuration.
- You can start a test run via the terminal.
- The testing libraries are correctly integrated.

### Task 2:
Build a small component for testing **Goal:** You will create a simple React component that is well-suited for initial tests.

**Assignment:**
- Create a `CounterCard` component.
- The component should:
  - display a heading
  - display a counter value
  - include a button to increment the counter
  - optionally include a reset button
- Use React 19 as usual in your project.
- Ensure that the texts in the UI are uniquely testable.
- Briefly integrate the component into your App and check in the browser if it works.

**Expected Result / Target State:**
- You have a visible, functional React component.
- The component displays content and reacts to clicks.
- The UI contains clearly recognizable texts and buttons.

### Task 3:
Create and structure the first test file **Goal:** You will learn the structure of a simple test file and organize your test meaningfully.

**Assignment:**
- Create a test file for `CounterCard` next to your component or in a suitable test folder.
- Structure the file with:
  - Imports
  - a `describe` block
  - at least one `it` or `test` block
- Briefly note in the file as a comment which test type is primarily present here:
  - Unit test
  - Component test
  - Integration test
- Additionally, formulate in 1–2 brief comments how these three test types differ.

**Expected Result / Target State:**
- Your test file is cleanly structured.
- You can recognize the basic structure of a React test.
- You have briefly differentiated the three test types.

### Task 4:
Render and check visible content **Goal:** You will test whether your component is rendered correctly and displays the expected content.

**Assignment:**
- Write tests that check:
  - whether the heading is visible
  - whether the initial counter value is displayed
  - whether the increment button is present
  - whether a reset button is present, if you have included it
- Use React Testing Library to render the component.
- Use queries that focus on visible content and roles as much as possible.

**Expected Result / Target State:**
- Your tests run successfully.
- The most important visible parts of the component are checked.
- You use meaningful queries from React Testing Library.

### Task 5:
Test interactions **Goal:** You will check whether user actions change the component as expected.

**Assignment:**
- Write at least two interaction tests:
  - A click on the increment button increases the counter value.
  - A click on reset resets the value, if you have a reset button.
- Use `@testing-library/user-event` for user interaction.
- Ensure you check the state before and after the action.
- Run all tests and fix errors until the test run is clean.

**Expected Result / Target State:**
- The interactions of your component are automatically tested.
- The test run is green.
- You have at least one test that checks a state change.

## Extension Tasks

### Extension Task 1: Add test cases for Props
**Goal:** You will test variations of your component with different inputs.

**Assignment:**
- Extend `CounterCard` with at least one prop, for example:
  - `title`
  - `initialCount`
  - `step`
- Write tests for at least two different prop combinations.
- Check if the component behaves correctly depending on the props.

**Expected Result / Target State:**
- Your component has become more flexible.
- The tests cover different input values.
- You recognize how tests help with versatile components.

### Extension Task 2: Add a negative test case
**Goal:** You will deliberately check a case where an element should not be present.

**Assignment:**
- Implement a condition in your component, for example:
  - The reset button only appears when the counter value is greater than 0.
  - An additional message only appears above a certain value.
- Write a test that checks that the element is initially not visible.
- Write another test that checks that it appears after an interaction.

**Expected Result / Target State:**
- You have at least one test for "not present" and one for "present afterwards".
- You practice handling positive and negative test cases.

### Extension Task 3: Clean up and document the test file
**Goal:** You will improve the readability and maintainability of your tests.

**Assignment:**
- Revise your test names so that it is immediately clear what is being tested.
- Group related tests meaningfully into `describe` blocks.
- Remove unnecessary repetitions.
- Add a short comment at the beginning of the file with 3 bullet points:
  - What is being tested?
  - Why is this test useful?
  - Which test type predominates?

**Expected Result / Target State:**
- Your test file is clear and understandable.
- You can easily extend your tests.
- You have a readable initial test base for your React 19 project.

## Important Notes

- Work step-by-step and run tests regularly.
- Pay attention to clear naming for components, test files, and test cases.
- Check visible content primarily via roles, texts, and labels.
- Keep your tests independent of each other.
- Adjust your component only as much as necessary to keep it testable.
- If a test fails, briefly document the cause directly in the code as a comment and then fix the error.
- If you finish early, complete at least two extension tasks.

## Reflection Questions

- How do you recognize the difference between a unit, component, and integration test in your example?
- Which parts of a test file do you need at a minimum to keep a simple React test understandable?
- Which React Testing Library query helped you the most and why?
- What does an automated test in your `CounterCard` bring you, even though you can also click the component in the browser?
- What change to your component would you test next?

---