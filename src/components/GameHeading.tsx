import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import platforms from "../data/platforms";
import usePlatformLookUp from "../hooks/usePlatformLookUP";
import useGenre from './../hooks/useGenre';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
 const genre = useGenre(gameQuery.genreID);
  const platform =  usePlatformLookUp(gameQuery.platformId);
 
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
