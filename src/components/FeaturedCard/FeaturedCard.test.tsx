import { render, screen } from '@testing-library/react';
import React from 'react';
import { Default } from './FeaturedCard.stories';

it('renders Featured card', () => {
    render(<Default {...(Default.args as any)} />);
    expect(screen.getByText('Blue oceans', {exact: false})).toBeInTheDocument();
    
});
