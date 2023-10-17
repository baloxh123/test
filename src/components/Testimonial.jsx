import {
  Container,
  Avatar,
  Heading,
  Text,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";

function Testimonial() {
  return (
    <Container maxW="full" bg="gray.50">
      <Container maxW="container.lg" py={20}>
        <VStack
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          gap={10}
        >
          <Heading textAlign="center" fontWeight="bold" color="primary.500">
            What our Clients Say
          </Heading>
          <Box>
            <Text fontSize="xl" color="gray.600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu.
            </Text>
          </Box>
          <VStack>
            <Avatar src="./avatar.jpg" size="2xl" />
            <Heading mt={2} textAlign="center">
              Trevor
            </Heading>
          </VStack>
        </VStack>
      </Container>
    </Container>
  );
}

export default Testimonial;
