import { ratings } from "../data/Ratings";
import { HStack, Select, Text } from "@chakra-ui/react";

export interface Rating {
  key: string;
  value: number;
}

interface Props {
  onRatingChange: (rating: number) => void;
  selectedRating: number;
}

const RatingSelector = ({ onRatingChange, selectedRating }: Props) => {
  const selectedObj = ratings.find((rating) => {
    return rating.value === selectedRating;
  });
  return (
    <HStack gap={"5"}>
      <Text marginY={"5px"}>Rating:</Text>
      <Select
        placeholder={selectedRating ? selectedObj?.key : "All"}
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
