import { render, screen, fireEvent } from 'test-utils';
import { Test } from './TestComponent.stories';
import 'jest-styled-components'

it('Renders Test component', () => {
    const handleClick = jest.fn()
    render(<Test {...(Test.args as any)} onClick={handleClick} />);
    const TextElement = screen.getByText('Test Component', {exact: false});
    expect(TextElement).toBeInTheDocument();
    fireEvent.click(screen.getByText('Click me', {exact: false}));
    expect(handleClick).toHaveBeenCalledTimes(1)
});