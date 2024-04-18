import React, { useState } from "react";
import { Box, VStack, HStack, Text, Divider, Image, Heading, Spinner } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const WeatherIcon = ({ icon }) => {
  return <Image src={`https://images.unsplash.com/photo-1531789694268-03cfe5989f89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwJTI0JTdCaWNvbiU3RCUyMGljb258ZW58MHx8fHwxNzEzNDA5NDMyfDA&ixlib=rb-4.0.3&q=80&w=1080`} w={20} h={20} />;
};

const WeatherData = ({ label, value }) => (
  <VStack spacing={1}>
    <Text fontSize="sm" fontWeight="bold">
      {label}
    </Text>
    <Text fontSize="2xl">{value}</Text>
  </VStack>
);

const Index = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={4} maxW="md" mx="auto">
      <VStack spacing={6}>
        <HStack>
          <FaMapMarkerAlt />
          <Heading size="lg">San Francisco</Heading>
        </HStack>
        <WeatherIcon icon="partly-cloudy-day" />
        <Heading size="4xl">19°</Heading>
        <Text fontSize="xl" fontWeight="bold">
          Partly Cloudy
        </Text>
        <HStack spacing={12}>
          <WeatherData label="Humidity" value="82%" />
          <WeatherData label="Wind" value="8km/h" />
        </HStack>
        <Divider />
        <HStack spacing={4}>
          <VStack>
            <Text>Sun</Text>
            <WeatherIcon icon="clear-day" />
            <Text>20°</Text>
          </VStack>
          <VStack>
            <Text>Mon</Text>
            <WeatherIcon icon="rain" />
            <Text>18°</Text>
          </VStack>
          <VStack>
            <Text>Tue</Text>
            <WeatherIcon icon="partly-cloudy-day" />
            <Text>22°</Text>
          </VStack>
          <VStack>
            <Text>Wed</Text>
            <WeatherIcon icon="cloudy" />
            <Text>17°</Text>
          </VStack>
          <VStack>
            <Text>Thu</Text>
            <WeatherIcon icon="partly-cloudy-day" />
            <Text>21°</Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Index;
