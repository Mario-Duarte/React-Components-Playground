import { render, screen } from 'test-utils';
import { AppHeader } from './AppHeader';
import { RocketLogo } from 'appComponents/Logo';
import 'jest-styled-components'

it('Renders AppHeader component with given title', () => {
    const testTitle = 'Test title';
    render(<AppHeader logo={<RocketLogo />} title={testTitle} />);
    const Title = screen.getByText(testTitle);
    expect(Title).toBeInTheDocument();
});