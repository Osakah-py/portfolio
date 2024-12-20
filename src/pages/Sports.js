import { useEffect } from 'react';
import { Flex, Box, Text, Heading } from '@radix-ui/themes';

import ProjectPresentation from '../component/ProjectPresentation';

import '../styles/Page.css'

import { sportsContent } from '../data/sportsContent';

function Sports() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Flex
        direction="column"
        gap="9">
            <Flex className='Title'
                direction="column"
                gap="3">
                <Heading as='h1' size="9"> Sports and Other Activities </Heading>
            </Flex>
            {sportsContent.map((proj, index) => 
                <ProjectPresentation
                    name={proj.name}
                    type={proj.type}
                    image={proj.image}
                    text1={proj.text1}
                    text2={proj.text2}
                    index={index} />)}
        </Flex>
    )

}

export default Sports