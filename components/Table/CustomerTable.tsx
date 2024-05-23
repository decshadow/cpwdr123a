import {
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { dateFormat } from "@/utils/format";
import { ViewIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";

export default function CustomerTable({
  data,
  loading,
  error,
}: {
  data: any;
  loading: boolean;
  error: any;
}) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th w={["15%"]}>Name</Th>
            <Th w={["15%"]}>Email</Th>
            <Th w={["20%"]}>Birth Date</Th>
            <Th w={["35%"]}>Address</Th>
            <Th w={["5%"]}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading && (
            <Tr>
              <Td colSpan={5}>
                <Center>
                  <Spinner size="xl" />
                </Center>
              </Td>
            </Tr>
          )}
          {data?.customers &&
            data.customers.customers.map((item: any) => (
              <Tr key={item._id}>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{dateFormat(item.birthdate)}</Td>
                <Td>{item.address}</Td>
                <Td>
                  <Link href={`/customers/${item._id}`}>
                    <IconButton
                      aria-label="View Customer"
                      icon={<ViewIcon />}
                    ></IconButton>
                  </Link>
                </Td>
              </Tr>
            ))}
          {data?.customers && data.customers.customers.length == 0 && (
            <Tr>
              <Td colSpan={5}>No customers found</Td>
            </Tr>
          )}
          {error && (
            <Tr>
              <Td colSpan={5}>{error.message}</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
