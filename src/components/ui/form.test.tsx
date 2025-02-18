import { render, screen } from "@testing-library/react";
import { Form } from "./form";

const FORM_ITEM_ELEMENT_TEST_ID = "form-element";

const DefaultForm = () => {
  return (
    <Form>
      <Form.Item>
        <Form.Label>라벨</Form.Label>
        <Form.Control>
          <input data-testid={FORM_ITEM_ELEMENT_TEST_ID} />
        </Form.Control>
        <Form.Description>설명</Form.Description>
        <Form.ErrorMessage>에러 메시지</Form.ErrorMessage>
      </Form.Item>
    </Form>
  );
};

const ErrorForm = () => {
  return (
    <Form>
      <Form.Item error>
        <Form.Label>라벨</Form.Label>
        <Form.Control>
          <input data-testid={FORM_ITEM_ELEMENT_TEST_ID} />
        </Form.Control>
        <Form.Description>설명</Form.Description>
        <Form.ErrorMessage>에러 메시지</Form.ErrorMessage>
      </Form.Item>
    </Form>
  );
};

describe("Form", () => {
  test("[a11y] label에 for가 존재하고 label의 id와 연결되어야 합니다.", async () => {
    render(<DefaultForm />);

    const formItemElement = screen.getByTestId(FORM_ITEM_ELEMENT_TEST_ID);
    const label = screen.getByText("라벨");

    expect(label).toHaveAttribute("for", formItemElement.id);
  });

  test("[a11y] 폼 요소에 id가 존재하고 description과 연결되어야 합니다.", async () => {
    render(<DefaultForm />);

    const formItemElement = screen.getByTestId(FORM_ITEM_ELEMENT_TEST_ID);
    const description = screen.getByText("설명");

    expect(formItemElement).toHaveAttribute("aria-describedby", description.id);
  });

  test('[a11y] 폼 요소가 유효하지 않을 경우 폼 요소에 aria-invalid="true" 속성이 존재해야 합니다.', async () => {
    render(<ErrorForm />);

    const formItemElement = screen.getByTestId(FORM_ITEM_ELEMENT_TEST_ID);

    expect(formItemElement).toHaveAttribute("aria-invalid", "true");
  });

  test("[a11y] error message에 id가 존재하고 폼 요소의 aria-describedby와 연결되어야 합니다.", async () => {
    render(<ErrorForm />);

    const formItemElement = screen.getByTestId(FORM_ITEM_ELEMENT_TEST_ID);
    const description = screen.getByText("설명");
    const errorMessage = screen.getByText("에러 메시지");

    expect(formItemElement).toHaveAttribute(
      "aria-describedby",
      description.id + " " + errorMessage.id,
    );
  });
});
