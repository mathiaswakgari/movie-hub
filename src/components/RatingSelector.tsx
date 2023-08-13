import React from "react";
import { ratings } from "../data/Ratings";
import { HStack, Select, Text } from "@chakra-ui/react";

export interface Rating {
  key: string;
  value: number;
}

interface Props {
  onRatingChange: (rating: number) => void;
}

const RatingSelector = ({ onRatingChange }: Props) => {
  return (
    <HStack gap={"5"}>
      <Text>Rating:</Text>
      <Select
        placeholder="All"
        width={"150px"}
        onChange={(e) => onRatingChange(parseInt(e.currentTarget.value))}
      >
        {ratings.map((rating) => (
          <option key={rating.value} value={rating.value}>
            {rating.key}
          </option>
        ))}
      </Select>
    </HStack>
  );
};

export default RatingSelector;
