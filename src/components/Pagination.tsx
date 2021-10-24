import React, { FC, ChangeEvent, useEffect, useState } from "react";
import {
  Grid,
  Center,
  Select,
  Text,
  Button,
  Stack,
  ChakraProvider
} from "@chakra-ui/react";
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator
} from "@ajna/pagination";

const fetchPokemons = async (
  pageSize: number,
  offset: number
): Promise<any> => {
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
  ).then(async (res) => await res.json());
};

const Home: FC = () => {
  // states
  const [pokemonsTotal, setPokemonsTotal] = useState<number | undefined>(
    undefined
  );
  const [pokemons, setPokemons] = useState<any[]>([]);

  // constants
  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    isDisabled,
    pageSize,
    setPageSize
  } = usePagination({
    total: pokemonsTotal,
    limits: {
      outer: outerLimit,
      inner: innerLimit
    },
    initialState: {
      pageSize: 5,
      isDisabled: false,
      currentPage: 1
    }
  });
  // effects
  useEffect(() => {
    fetchPokemons(pageSize, offset)
      .then((pokemons) => {
        setPokemonsTotal(pokemons.count);
        setPokemons(pokemons.results);
      })
      .catch((error) => console.log("App =>", error));
  }, [currentPage, pageSize, offset]);

  // handlers
  const handlePageChange = (nextPage: number): void => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
    console.log("request new data with ->", nextPage);
  };

  const handlePageSizeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const pageSize = Number(event.target.value);

    setPageSize(pageSize);
  };

  const handleDisableClick = (): void => {
    setIsDisabled((oldState) => !oldState);
  };

  return (
    <ChakraProvider>
      <Stack>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          isDisabled={isDisabled}
          onPageChange={handlePageChange}
        >
          <PaginationContainer
            align="center"
            justify="space-between"
            p={4}
            w="full"
          >
            <PaginationPrevious
              _hover={{
                bg: "facebook.300"
              }}
              bg="facebook.300"
              onClick={() =>
                console.log(
                  "Im executing my own function along with Previous component functionality"
                )
              }
            >
              <Text>Previous</Text>
            </PaginationPrevious>
            <PaginationPageGroup
              isInline
              align="center"
              separator={
                <PaginationSeparator
                  onClick={() =>
                    console.log(
                      "Im executing my own function along with Separator component functionality"
                    )
                  }
                  bg="blue.300"
                  fontSize="sm"
                  w={7}
                  jumpSize={11}
                />
              }
            >
              {pages.map((page: number) => (
                <PaginationPage
                  w={7}
                  bg="facebook.300"
                  key={`pagination_page_${page}`}
                  page={page}
                  onClick={() =>
                    console.log(
                      "Im executing my own function along with Page component functionality"
                    )
                  }
                  fontSize="sm"
                  _hover={{
                    bg: "green.300"
                  }}
                  _current={{
                    bg: "green.300",
                    fontSize: "sm",
                    w: 7
                  }}
                />
              ))}
            </PaginationPageGroup>
            <PaginationNext
              _hover={{
                bg: "facebook.300"
              }}
              bg="facebook.300"
              onClick={() =>
                console.log(
                  "Im executing my own function along with Next component functionality"
                )
              }
            >
              <Text>Next</Text>
            </PaginationNext>
          </PaginationContainer>
        </Pagination>
    

        <Grid
          gap={3}
          mt={20}
          px={20}
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(2, 1fr)"
        >
                <Center width="100px"  p={4}>
             
            </Center>
          {/* {pokemons?.map(({ name }) => (
            <Center key={name} bg="green.100" p={4}>
              <Text>{name}</Text>
            </Center>
          ))} */}
        </Grid>
      </Stack>
    </ChakraProvider>
  );
};

export default Home;
