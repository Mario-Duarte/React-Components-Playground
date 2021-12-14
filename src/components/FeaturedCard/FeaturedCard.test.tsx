import { render, screen } from 'test-utils';
import { Default } from './FeaturedCard.stories';

it('renders Featured card', () => {
    render(<Default {...(Default.args as any)} />);
    const TextElement = screen.getByText('Blue oceans', {exact: false});
    expect(TextElement).toBeInTheDocument();
});
