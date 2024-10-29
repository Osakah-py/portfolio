import React from "react";

import { Text, Flex, Strong, Heading, Em } from '@radix-ui/themes';

import shopInpImage from "../assets/shop-inp.png"
import "../styles/ProjectPresentation.css"

function ProjectPresentation() {
    return (
        <Flex className="ProjectContainer"
            justify="center"
            align="stretch"
            gap="6">
            <Flex className="ProjectPresContainer defaultBox"
                direction="column"
                justify="center" 
                gap="5">
                <Em>WEB UI/UX Design</Em>
                <Heading>Shop INP</Heading>
                <Text size="5">
                    During my time with the Net7 association, I collaborated with a team to develop a club shop website aimed at enhancing
                    accessibility to club merchandise for students. The website provides a seamless platform for students to browse and purchase
                    products from their favorite clubs, while also giving clubs an easy way to showcase their offerings.
                </Text>
                <Text  size="5">
                    In this project, I worked as a front-end developer, leveraging Svelte and SvelteKit to build an interactive and engaging
                    user experience. This role allowed me to strengthen my CSS skills, with a focus on creating responsive designs optimized for mobile devices.
                </Text>
            </Flex>
            <Flex className="ProjectImage defaultBox"
                justify="center"
                align="center">
                <img src={shopInpImage} />
            </Flex>
        </Flex>
    )
}

export default ProjectPresentation