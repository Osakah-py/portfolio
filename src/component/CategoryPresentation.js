import React from "react";

import { Text, Flex, Box, Button, Heading } from '@radix-ui/themes';

import "../styles/CategoryPresentation.css";

function CategoryPresentation() {
    return (
        <Box className="CatPresContainer">
            <Flex
                wrap="wrap"
                justify="between"
                align="stretch"
            >
                <Flex
                    direction="column"
                    justify="center"
                    gap="4"
                    className="CatPresImage"
                    >
                    <Heading as="h1" size="8">My Projects</Heading>
                    <Text>From simple interfaces to complex web interfaces, during my two years at ENSEEIHT I had the opportunity to work on a bunch of different computer science projects.  </Text>
                    <Button variant='surface' style={{"max-width":"150px", "padding":"20px 5px"}}>View All My Projects</Button>
                </Flex>
                <img className="CatPresImage" src="https://framerusercontent.com/images/eSSOryz6R0dgWVPDhxZuRb7oV5E.gif" />
            </Flex>
        </Box>
    )
}

export default CategoryPresentation