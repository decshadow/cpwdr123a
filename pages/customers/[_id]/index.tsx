import AccountTable from "@/components/Table/AccountTable";
import TierDetailsTable from "@/components/Table/TierDetailsTable";
import { GET_CUSTOMER } from "@/graphql/queries";
import { dateFormat } from "@/utils/format";
import { useQuery } from "@apollo/client";
import { Center, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function CustomerDetail() {
  const router = useRouter();
  const { _id } = router.query;
  const { data, loading, error } = useQuery(GET_CUSTOMER, {
    variables: { _id },
  });
  const customer = data?.customer;
  return (
    <section className="py-8 sm:py-20">
      {loading && (
        <Center>
          <Spinner></Spinner>
        </Center>
      )}
      {customer && (
        <div className="mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              {customer.name}
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-2xl lg:mt-12 lg:max-w-none">
            <div className="space-y-6">
              <div>
                <div className="text-xl text-gray-500">User Name</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-md text-gray-900">
                  {customer.username}
                </div>
              </div>
              <div>
                <div className="text-xl text-gray-500">Email address</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-md text-gray-900">
                  {customer.email}
                </div>
              </div>
              <div>
                <div className="text-xl text-gray-500">Birth Date</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-md text-gray-900">
                  {dateFormat(customer.birthdate)}
                </div>
              </div>
              <div>
                <div className="text-xl text-gray-500">Address</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-md text-gray-900">
                  {customer.address}
                </div>
              </div>
              <div>
                <div className="text-xl text-gray-500">Accounts</div>
                <div className="mt-2 pb-2 text-md text-gray-900">
                  <AccountTable data={customer.accounts}></AccountTable>
                </div>
              </div>
              <div>
                <div className="text-xl text-gray-500">Tier and Details</div>
                <div className="mt-2 pb-2 text-md text-gray-900">
                  <TierDetailsTable data={customer.tier_and_details}></TierDetailsTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
