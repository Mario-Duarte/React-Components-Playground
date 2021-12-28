import { render, screen } from 'test-utils';
import { Footer } from './Footer';
import 'jest-styled-components'

it('Renders Footer component', () => {
    const { container } = render(<Footer />);
    const TextElement = screen.getByText('Created by', {exact: false});
    expect(TextElement).toBeInTheDocument();
    const LinkContent = screen.getByText('Mario Duarte', {exact: false});
    expect(LinkContent).toBeInTheDocument();
});

it('Opens footer link', () => {
    const { container } = render(<Footer />);
    const LinkElement = screen.getByText('Mario Duarte', {exact: false}).closest('a');
    expect(LinkElement).toHaveAttribute('href', 'https://www.marioduarte.co.uk/')
});