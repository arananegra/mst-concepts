import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TextFieldMui } from "./text-field-mui.component";

describe('Text field mui tests', () => {
  it('should render a happy path input with simple props', () => {
    // Arrange
    const props = {
      label: 'text field',
      name: 'input-name',
      onChange: jest.fn(),
      value: 'value',
    };

    // Act
    const { getByTestId, asFragment } = render(<TextFieldMui {...props} />);
    const textFieldElement = getByTestId('mui-textfield') as HTMLInputElement;
    //Assert

    expect(textFieldElement).not.toBeUndefined();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call on onChange when event is fired', () => {
    // Arrange
    const props = {
      label: 'text field',
      name: 'input-name',
      onChange: jest.fn(),
    };
    // Act
    const { getByTestId } = render(<TextFieldMui {...props} />);
    const textFieldElement = getByTestId('mui-textfield') as HTMLInputElement;

    //Assert
    expect(textFieldElement.value).toBe('');
    fireEvent.change(textFieldElement, { target: { value: 'John' } });
    expect(textFieldElement.value).toBe('John');

    expect(props.onChange).toHaveBeenCalled();
  });

  it('should call onBlur when event is passed', () => {
    // Arrange
    const props = {
      label: 'text field',
      name: 'input-name',
      value: '',
      onBlur: jest.fn(),
      onChange: jest.fn(),
      error: 'Error',
    };

    // Act
    const { getByTestId } = render(<TextFieldMui {...props} />);
    const textFieldElement = getByTestId('mui-textfield') as HTMLInputElement;
    fireEvent.blur(textFieldElement);
    //Assert
    expect(props.onBlur).toHaveBeenCalled();
  });

});
