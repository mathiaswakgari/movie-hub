import { orders } from "../data/Orders";
import { HStack, Select, Text } from "@chakra-ui/react";

interface Props {
  onOrderChange: (order: string) => void;
  selectedOrder: string;
}

const OrderSelector = ({ onOrderChange, selectedOrder }: Props) => {
  return (
    <HStack gap={"5"}>
      <Text marginY={"5px"}>Sort-By:</Text>
      <Select
        placeholder={selectedOrder ? selectedOrder : "All"}
        width={"150px"}
        onChange={(e) => onOrderChange(e.currentTarget.value)}
      >
        {orders.map((order) => (
          <option key={order.value} value={order.value}>
            {order.key}
          </option>
        ))}
      </Select>
    </HStack>
  );
};

export default OrderSelector;
