import React, { useState } from "react";
import CustomerTable from "@/components/Table/CustomerTable";
import { GET_CUSTOMERS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";

export default function Customers() {
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 5;

  const { data, loading, error, refetch } = useQuery(GET_CUSTOMERS, {
    variables: { input: { limit, skip: currentPage * limit } },
  });

  const totalCustomers = data?.customers?.totalCustomers || 0;
  const totalPages = Math.ceil(totalCustomers / limit);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      refetch({ input: { limit, skip: (currentPage + 1) * limit } });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      refetch({ input: { limit, skip: (currentPage - 1) * limit } });
    }
  };

  return (
    <section className="py-8 sm:py-20">
      <div className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Customer Page
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-2xl lg:mt-12 lg:max-w-none">
          <div className="w-full flex justify-end">
            <Stack direction={'row'} spacing={4}>
              <Button 
                leftIcon={<ArrowBackIcon />} 
                onClick={handlePreviousPage} 
                isDisabled={currentPage === 0}
              >
                Back
              </Button>
              <Button 
                rightIcon={<ArrowForwardIcon />} 
                onClick={handleNextPage} 
                isDisabled={currentPage >= totalPages - 1}
              >
                Next
              </Button>
            </Stack>
          </div>
          <CustomerTable data={data} loading={loading} error={error}></CustomerTable>
        </div>
      </div>
    </section>
  );
}
