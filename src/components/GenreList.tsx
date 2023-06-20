import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = (props: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return error;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id} padding="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              ></Image>
              <Button
                fontWeight={g.id == props.selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                whiteSpace={"normal"}
                textAlign="left"
                onClick={() => props.onSelectGenre(g)}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
