import {
    Badge,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function TierDetailsTable({ data }: { data: any }) {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Tier</Th>
            <Th>Benefits</Th>
            <Th>Active Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item: any) => (
            <Tr key={item._id}>
              <Td>{item.tier}</Td>
              <Td>{item.benefits.map((item:any) => <Badge key={item}>{item}</Badge>)}</Td>
              <Td>{item.active ? <Badge colorScheme='green'>Activated</Badge> : <Badge colorScheme='red'>Disabled</Badge>}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
