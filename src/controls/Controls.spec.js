import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';
import { exportAllDeclaration, isTSAnyKeyword } from '@babel/types';

// descibe('Controls', () => {
//   it('renders a container element', () => {
//     const wrapper= rtl.render(<Controls />);
//     expect(wrapper.getByTestId(/container/1));
//   });

//   it('renders success message after clicking button', async () => {
//     const wrapper = rtl.render(<Controls />);
//     const button = wrapper.getByTestId('button');
//     expect(wrapper.queryByTexy(/succuess/i)).not.toBeInTheDocument();
//     rtl.fireEvent.click(button);
//     expect(await wrapper.findByText(/success/i));
//   });
// }

test("component renders", () => {
  render(<Controls />);
});

test("Provides buttons to toggle states", () => {
  const { getByText } = render(<Controls />);

})

test('Gate defaults to unlocked and open', () => {
  const { getByText } = render(<Controls />);

  getByText(/close gate/i);
  getByText(/lock gate/i);
});

test('expect open/closed toggle button is disabled when gate is locked', () => {
  const { getByText } = render(<Controls locked={true} />);

  //mock function toggleClosed
  const toggleClosed = jest.fn();

  //set btn with text
  const btn = getByText(/close gate/i);

  //fire mock btn function
  fireEvent.click(btn);


  //locked item, unable to be called, true
  expect(toggleClosed).toHaveBeenCalledTimes(0);
});

// Test away!