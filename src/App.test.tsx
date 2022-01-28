import React from 'react';
import { render, screen } from '@testing-library/react';
import {Component1, Component2} from './App';

// import App2 from '/App';

test('renders learn react link', () => {
  render(<Component1 />);
  render(<Component2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});