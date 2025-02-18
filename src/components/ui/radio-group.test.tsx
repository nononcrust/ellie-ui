import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioGroup } from "./radio-group";

describe("RadioGroup", () => {
  test("[a11y] radiogroup에 role='radiogroup' 속성이 존재해야 합니다.", async () => {
    render(
      <RadioGroup>
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
      </RadioGroup>,
    );

    const radiogroup = screen.getByRole("radiogroup");

    expect(radiogroup).toBeInTheDocument();
  });

  test("[a11y] radio에 role='radio' 속성이 존재해야 합니다.", async () => {
    render(
      <RadioGroup>
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
      </RadioGroup>,
    );

    const radios = screen.getAllByRole("radio");

    radios.forEach((radio) => {
      expect(radio).toBeInTheDocument();
    });
  });

  test("[a11y] radiogroup이 required일 경우 aria-required='true' 속성이 존재해야 합니다.", async () => {
    render(
      <RadioGroup required>
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
      </RadioGroup>,
    );

    const radiogroup = screen.getByRole("radiogroup");

    expect(radiogroup).toHaveAttribute("aria-required", "true");
  });

  test('[a11y] radio가 선택되어 있을 때 aria-checked="true" 속성이 존재해야 합니다.', async () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
      </RadioGroup>,
    );

    const radio = screen.getByRole("radio", { name: "옵션 1" });

    expect(radio).toHaveAttribute("aria-checked", "true");
  });

  test('[a11y] radio가 선택되어 있지 않을 때 aria-checked="false" 속성이 존재해야 합니다.', async () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
      </RadioGroup>,
    );

    const radio = screen.getByRole("radio", { name: "옵션 2" });

    expect(radio).toHaveAttribute("aria-checked", "false");
  });

  test("[a11y] Space 키로 radio를 선택할 수 있어야 합니다.", async () => {
    render(
      <RadioGroup>
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
      </RadioGroup>,
    );

    const user = userEvent.setup();

    const radio = screen.getByRole("radio", { name: "옵션 1" });

    act(() => radio.focus());

    await user.keyboard(" ");

    expect(radio).toHaveAttribute("aria-checked", "true");
  });

  test("[a11y] 선택된 radio가 있는 상태에서 radiogroup을 포커스했을 때 선택된 radio가 포커스되어야 합니다.", async () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
      </RadioGroup>,
    );

    const radiogroup = screen.getByRole("radiogroup");

    act(() => radiogroup.focus());

    const radio = screen.getByRole("radio", { name: "옵션 1" });

    expect(radio).toHaveFocus();
  });

  test("[a11y] 선택된 radio가 없는 상태에서 radiogroup을 포커스했을 때 첫 번째 포커스 가능한 radio가 포커스되어야 합니다.", async () => {
    render(
      <RadioGroup>
        <RadioGroup.Option value="1" disabled>
          옵션 1 (disabled)
        </RadioGroup.Option>
        <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
      </RadioGroup>,
    );

    const radiogroup = screen.getByRole("radiogroup");

    act(() => radiogroup.focus());

    const radio = screen.getByRole("radio", { name: "옵션 2" });

    expect(radio).toHaveFocus();
  });

  test("[a11y] radio에 label이 존재하고 id와 연결되어야 합니다.", async () => {
    render(
      <RadioGroup>
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
      </RadioGroup>,
    );

    const label = screen.getByText("옵션 1");
    const radio = screen.getByRole("radio", { name: "옵션 1" });

    expect(label).toHaveAttribute("for", radio.id);
  });

  test("[a11y] 키보드 방향키로 radio의 포커스를 이동할 수 있어야 합니다.", async () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2">옵션 2</RadioGroup.Option>
      </RadioGroup>,
    );

    const user = userEvent.setup();

    const radio1 = screen.getByRole("radio", { name: "옵션 1" });
    const radio2 = screen.getByRole("radio", { name: "옵션 2" });

    act(() => radio1.focus());

    await user.keyboard("{ArrowDown}");

    expect(radio2).toHaveFocus();

    await user.keyboard("{ArrowUp}");

    expect(radio1).toHaveFocus();

    await user.keyboard("{ArrowRight}");

    expect(radio2).toHaveFocus();

    await user.keyboard("{ArrowLeft}");

    expect(radio1).toHaveFocus();
  });

  test("[a11y] disabled 상태인 radio는 키보드 방향키로 포커스를 이동할 수 없어야 합니다.", async () => {
    render(
      <RadioGroup>
        <RadioGroup.Option value="1">옵션 1</RadioGroup.Option>
        <RadioGroup.Option value="2" disabled>
          옵션 2 (disabled)
        </RadioGroup.Option>
        <RadioGroup.Option value="3">옵션 3</RadioGroup.Option>
      </RadioGroup>,
    );

    const user = userEvent.setup();

    const radio1 = screen.getByRole("radio", { name: "옵션 1" });
    const radio3 = screen.getByRole("radio", { name: "옵션 3" });

    act(() => radio1.focus());

    await user.keyboard("{ArrowDown}");

    expect(radio3).toHaveFocus();
  });
});
