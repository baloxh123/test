import {
  SimpleGrid,
  Text,
  Heading,
  Container,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  Activity,
  Building,
  Cable,
  Clock,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

function Services() {
  return (
    <Container maxW="full" id="services">
      <Container maxW="container.lg" py={20}>
        <VStack spacing={20}>
          <Box textAlign="center" fontWeight="bold">
            <Text fontSize="xl" color="primary.500">
              Features
            </Text>
            <Heading>State of The Art Healthcare</Heading>
          </Box>
          <HStack spacing={10}>
            <VStack alignItems="flex-start" py={4} px={8} gap={2}>
              <Box color="primary.500">
                <Clock size={36} />
              </Box>
              <Heading fontSize="xl">24/7 Support</Heading>
              <Text color="gray.500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Text>
            </VStack>
            <VStack alignItems="flex-start" py={4} px={8} gap={2}>
              <Box color="primary.500">
                <Cable size={36} />
              </Box>
              <Heading fontSize="xl">Modern Equipment</Heading>
              <Text color="gray.500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Text>
            </VStack>
            <VStack alignItems="flex-start" py={4} px={8} gap={2}>
              <Box color="primary.500">
                <Activity size={36} />
              </Box>
              <Heading fontSize="xl">Emergency OP</Heading>
              <Text color="gray.500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Container>
    </Container>
  );
}

export default Services;
