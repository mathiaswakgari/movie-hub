import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import "./movieCard.css";
const MovieCardSkeleton = () => {
  return (
    <Card w={"xs"} className="card">
      <Skeleton height={"500px"} className="image" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
