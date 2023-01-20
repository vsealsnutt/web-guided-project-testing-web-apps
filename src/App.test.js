import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render without errors', () => {
    render (<App />);
})

test('when app mounts, Add New Animal header exists on the screen', () => {
    render (<App />);

    const header = screen.getByText('Add New Animal');

    expect(header).toBeInTheDocument();
    // expect(header).toHaveTextContent(/add new animal/i);
})