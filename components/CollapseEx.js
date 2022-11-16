import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react";

// buttonText="Test"
// buttonContent = "Test paragraph"
// collapseState={value['open']}
// toggle={toggleCollapse}

function CollapseEx(props) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box p={3}>
      <Button onClick={onToggle}>{props["buttonText"]}</Button>
      <Collapse in={isOpen} unmountOnExit>
        {props["buttonContent"]}
        <Box />
      </Collapse>
    </Box>
  );
}

export default CollapseEx;
