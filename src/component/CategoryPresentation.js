import React from "react";

import { Text, Flex, Box, Button, Heading } from '@radix-ui/themes';

import "../styles/CategoryPresentation.css";

function CategoryPresentation({name, description, button, id}) {
    return (
        <Box key={id} className="CatPresContainer">
            <Flex
                wrap="wrap"
                justify="center"
                align="stretch"
            >
                <Flex
                    direction="column"
                    justify="center"
                    gap="4"
                    className="CatPresImage"
                    >
                    <Heading as="h1" size="8">{name}</Heading>
                    <Text size="5">{description}</Text>
                    <Button variant='surface' style={{"max-width":"150px", "padding":"20px 5px"}}>{button}</Button>
                </Flex>
                <img className="CatPresImage" src="https://framerusercontent.com/images/eSSOryz6R0dgWVPDhxZuRb7oV5E.gif" />
            </Flex>
        </Box>
    )
}

export default CategoryPresentation