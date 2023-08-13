import { orders } from "../data/Orders";
import { HStack, Select, Text } from "@chakra-ui/react";

interface Props {
  onOrderChange: (order: string) => void;
}

const OrderSelector = ({ onOrderChange }: Props) => {
  return (
    <HStack gap={"5"}>
      <Text>Sort-By:</Text>
      <Select
        placeholder="All"
        width={"150px"}
        onChange={(e) => onOrderChange(e.currentTarget.value)}
      >
        {orders.map((order) => (
          <option key={order} value={order}>
            {order}
          </option>
        ))}
      </Select>
    </HStack>
  );
};

export default OrderSelector;
