```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure the consistent, high-quality development of AGENTS.md, a repository for AI coding agents.  Adherence to these principles will maximize code maintainability, testability, and overall productivity.

## 1. DRY (Don't Repeat Yourself)

*   All code snippets and functions should be self-contained and reusable across multiple agents or components.
*   Avoid duplicating logic or boilerplate code.
*   Implement common functionality via functions or modules.
*   When necessary, use design patterns to achieve common results.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize clarity and readability above all else.
*   Strive for concise and easily understandable code.
*   Avoid overly complex solutions.
*   Use clear variable names and comments to explain intent.
*   Keep functions and classes as small as possible.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/module should have one, and only one, reason to change.
*   **Open/Closed Principle:** The system should be open for extension but closed for modification.
*   **Liskov Substitution Principle:**  Subclasses should be able to replace a base class without altering the correctness of the program.
*   **Interface Segregation Principle:**  Clients should not be forced to use interfaces they do not need.
*   **Dependency Inversion Principle:**  High-level modules (classes) should not depend on low-level modules (classes).

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement features and components that are explicitly required for the current task or phase.
*   Avoid adding functionality that is likely to be outdated or superseded in the future.
*   Refactor code to remove unnecessary complexity and unused features.

## 5. Code Structure & File Organization

*   **File Limits:** Each file must be no more than 180 lines of code.
*   **Modularization:** Break down large files into smaller, well-defined modules.
*   **Naming Conventions:**
    *   Functions: Use snake_case.
    *   Classes: Use PascalCase.
    *   Variables: Use camelCase.
    *   Modules: Use hyphens (e.g., `agents_module.py`).
*   **Comments:** Use comments to explain complex logic, assumptions, and design choices.  Comments should be informative, not redundant.
*   **Documentation:**  Provide clear and concise documentation for functions, classes, and modules.
*   **Error Handling:** Implement appropriate error handling and logging to aid debugging and monitoring.

## 6. Testing

*   **Comprehensive Test Suite:**  Aim for a minimum of 80% code coverage.
*   **Unit Tests:**  Develop unit tests for each function and class to verify their correctness.
*   **Integration Tests:**  Create integration tests to ensure that different components of the agent work together as expected.
*   **Test-Driven Development:** Write tests before implementation.
*   **Mocking/Stubbing:**  Use mocks and stubs for testing external dependencies.  Do *not* use real implementations; only mocks/stubs for tests.
*   **Test Structure:**  Organize tests logically within the project structure.

## 7.  Code Style & Formatting

*   Use a consistent code formatter (e.g., Black or Prettier).
*   Follow PEP 8 guidelines for Python code style.
*   Use whitespace effectively to improve readability.
*   Consistent indentation.

## 8.  Agencies Specific Guidelines

*   All agent definitions must be represented as modules.
*   Maintain a separate `agent.yml` file for each agent.  This file should contain the necessary configuration for the agent's behavior.
*   Design agents to be modular and reusable across multiple agents.

## 9.  Dependencies

*   Explicitly declare all dependencies in `requirements.txt` or equivalent.
*   Maintain a versioned dependency list.
*   Minimize dependencies to reduce the risk of breaking changes.

## 10. Project Structure (Example)

```
AGENTS.md
├── agent.yml
├── agent_module.py
├── data_handler.py
├── utils.py
└── tests/
    ├── __init__.py
    ├── test_agent_module.py
    └── ...
```

These guidelines are intended to serve as a blueprint for the AGENTS.md repository. Regular review and updates are encouraged to ensure continuous improvement of the code.  Any changes require a pull request with thorough documentation.
```