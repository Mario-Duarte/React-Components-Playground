import { render, screen } from 'test-utils';
import { AppHero } from './AppHero';
import 'jest-styled-components'

it('Renders AppHeader component with title', () => {
    render(<AppHero />);
    const Title = screen.getByText('Components Playground', {exact: false});
    expect(Title).toBeInTheDocument();
});

it('Opens AppHeader github link', () => {
    render(<AppHero />);
    const LinkElement = screen.getByText('this project', {exact: false}).closest('a');
    expect(LinkElement).toHaveAttribute('href', 'https://github.com/Mario-Duarte/Storybooks-playground');
});