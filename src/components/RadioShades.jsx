import "@radix-ui/themes/styles.css";

import { Flex, Box, Text, RadioCards } from "@radix-ui/themes";

function RadioShades() {
  return (
    <Box maxWidth="600px" maxHeight="100px" mb="20px">
      <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "4" }}>
        <RadioCards.Item variant="surface" value="1">
          <Flex direction="column" width="100%">
            <Text weight="bold">Espresso</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="2">
          <Flex direction="column" width="100%">
            <Text weight="bold">Choco</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="3">
          <Flex direction="column" width="100%">
            <Text weight="bold">Mocha</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="4">
          <Flex direction="column" width="100%">
            <Text weight="bold">Coffee</Text>
          </Flex>
        </RadioCards.Item>
      </RadioCards.Root>
    </Box>
  );
}

export default RadioShades;
