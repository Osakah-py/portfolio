import React from "react";

import { Text, Flex, Strong, Heading, Em } from '@radix-ui/themes';

import "../styles/ProjectPresentation.css"

function ProjectPresentation({name, type, image, text1, text2, index}) {
    return (
        <Flex className="ProjectContainer"
            justify="center"
            align="stretch"
            gap="6">
            <Flex className="ProjectPresContainer defaultBox"
                direction="column"
                justify="center" 
                gap="5"
                style={index % 2 === 0 ? { order: 2 } : {}}>
                <Em>{type}</Em>
                <Heading>{name}</Heading>
                <Text size="5">
                    {text1}
                </Text>
                <Text  size="5">
                    {text2}
                </Text>
            </Flex>
            <Flex className="ProjectImage defaultBox"
                justify="center"
                align="center">
                <img src={image} />
            </Flex>
        </Flex>
    )
}

export default ProjectPresentation