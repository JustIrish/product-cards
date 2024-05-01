import "@radix-ui/themes/styles.css";

import { Flex, Box, Text, RadioCards } from "@radix-ui/themes";

function CardsRadio() {
  return (
    <Box maxWidth="600px" maxHeight="100px" mb="10px">
      <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "4" }}>
        <RadioCards.Item variant="surface" value="1">
          <Flex direction="column" width="100%">
            <Text weight="bold">25-50 ML</Text>
            <Text>$45.00</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="2">
          <Flex direction="column" width="100%">
            <Text weight="bold">50-75 ML</Text>
            <Text>$65.00</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="3">
          <Flex direction="column" width="100%">
            <Text weight="bold">75-95 ML</Text>
            <Text>$75.00</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="4">
          <Flex direction="column" width="100%">
            <Text weight="bold">100 ML</Text>
            <Text>$85.00</Text>
          </Flex>
        </RadioCards.Item>
      </RadioCards.Root>
    </Box>
  );
}

export default CardsRadio;
