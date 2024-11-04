import { useEffect } from 'react';
import { Flex, Box, Text, Heading } from '@radix-ui/themes';

import ProjectPresentation from '../component/ProjectPresentation';

import '../styles/Page.css'

import { educationContent } from '../data/educationContent';

function Education() {
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
                <Heading as='h1' size="9"> Education </Heading>
                <Text>
                When it comes to my education, I took the traditional path toward French engineering schools. 
                After high school, I joined a preparatory class and later gained admission to ENSEEIHT through a competitive exam. 
                </Text>
                <Text> 
                In preparatory class, I was fortunate to be part of the new MPI track, which provided me 
                with a strong theoretical foundation in computer science.
                </Text>
            </Flex>
            {educationContent.map((educ, index) => 
                <ProjectPresentation
                    name={educ.name}
                    type={educ.type}
                    image={educ.image}
                    text1={educ.text1}
                    text2={educ.text2}
                    index={index} />)}
        </Flex>
    )

}

export default Education