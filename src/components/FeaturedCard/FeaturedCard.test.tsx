
import { render, screen } from 'test-utils';
import { Default } from './FeaturedCard.stories';
import 'jest-styled-components'

it('renders Featured card', () => {
    const { container } = render(<Default {...(Default.args as any)} />);
    const TextElement = screen.getByText('Blue oceans', {exact: false});
    expect(TextElement).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule('background-color','#f9f9f9');
});
