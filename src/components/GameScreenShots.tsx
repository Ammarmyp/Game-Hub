import { Button, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useScreenShots(gameId);
  if (isLoading) return null;

  if (error) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2} rounded="xl">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((file) => (
              <Image key={file.id} src={file.image} borderRadius={5} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={8}>
          {" "}
          {isFetchingNextPage ? "Loading..." : "More Images"}
        </Button>
      )}
    </>
  );
};

export default GameScreenShots;
