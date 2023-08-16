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
      <Text
        marginY={"5px"}
        fontSize={{
          base: "10px",
          md: "15px",
        }}
      >
        Rating:
      </Text>
      <Select
        placeholder={selectedRating ? selectedObj?.key : "All"}
        width={{
          base: "100px",
          sm: "150px",
        }}
        fontSize={{
          base: "10px",
          md: "15px",
        }}
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
