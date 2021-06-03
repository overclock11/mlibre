import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    const {findAllByRole, getByText, container} = render(<App />);
    expect(getByText('Mercado Libre')).toBeInTheDocument()
});
