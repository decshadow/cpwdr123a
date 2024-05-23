// Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages';
import { ChakraProvider } from "@chakra-ui/react";

// Mocking next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

// Mocking next/font/google
jest.mock('next/font/google', () => ({
  Inter: () => {
    return {
      className: 'inter-font'
    };
  }
}));

describe('Home', () => {
  test('renders the main elements correctly', () => {
    render(
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    );

    // Check if the heading is rendered
    expect(screen.getByRole('heading', {
      name: /Next\.js \+ GraphQL Solution for COMPASS Pathways!/i,
    })).toBeInTheDocument();

    // Check if the image is rendered
    const img = screen.getByAltText('Next.js Logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/next.svg');
    expect(img).toHaveAttribute('width', '180');
    expect(img).toHaveAttribute('height', '37');

    // Check if the link to the customers page is rendered with the correct button
    const link = screen.getByRole('link', { name: /View Customers Page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/customers');

    // Check if the button within the link is rendered correctly
    const button = screen.getByRole('button', { name: /View Customers Page/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('chakra-button');
  });
});
