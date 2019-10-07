import React from 'react';
import Display from './Display';
import { render } from '@testing-library/react';

test("component renders", () => {
    render(<Display />);
  });

test('displays if gate is open/closed and if it is locked/unlocked', () => {
    const { getByText } = render(<Display />);
    const open = getByText(/open/i);
    const locked = getByText(/unlocked/i);

    expect(open).toBeDefined();
    expect(locked).toBeDefined();
});  

// Test away!