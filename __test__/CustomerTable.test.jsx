import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomerTable from '@/components/Table/CustomerTable';
import { ChakraProvider } from '@chakra-ui/react';

const mockData = {
  customers: {
    customers: [
      {
        _id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        birthdate: new Date('1980-01-01').getTime(),
        address: '123 Main St',
      },
      {
        _id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        birthdate: new Date('1990-02-02').getTime(),
        address: '456 Elm St',
      },
    ],
  },
};

describe('CustomerTable Component', () => {
  it('renders loading spinner when loading is true', () => {
    render(
      <ChakraProvider>
        <CustomerTable data={null} loading={true} error={null} />
      </ChakraProvider>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders customer data when available', () => {
    render(
      <ChakraProvider>
        <CustomerTable data={mockData} loading={false} error={null} />
      </ChakraProvider>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('1980-01-01')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();

    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('1990-02-02')).toBeInTheDocument();
    expect(screen.getByText('456 Elm St')).toBeInTheDocument();
  });

  it('renders error message when error is present', () => {
    render(
      <ChakraProvider>
        <CustomerTable data={null} loading={false} error={new Error('Failed to fetch')} />
      </ChakraProvider>
    );

    expect(screen.getByText('Failed to fetch')).toBeInTheDocument();
  });

  it('renders no customers message when data is empty', () => {
    render(
      <ChakraProvider>
        <CustomerTable data={{ customers: { customers: [] }}} loading={false} error={null} />
      </ChakraProvider>
    );

    expect(screen.getByText('No customers found')).toBeInTheDocument();
  });
});
