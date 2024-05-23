import {
  Badge,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function AccountTable({ data }: { data: any }) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th w={["15%"]}>Id</Th>
            <Th w={["15%"]}>Limit</Th>
            <Th w={["20%"]}>Products</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: any) => (
            <Tr key={item._id}>
              <Td>{item.account_id}</Td>
              <Td>{item.limit}</Td>
              <Td>
                {item.products.map((item: any) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
