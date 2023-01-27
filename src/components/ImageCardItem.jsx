import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import '../App.css'

export const ImageCardItem = ({img,head,para}) => {
return <SimpleGrid w='293px' h='240px' margin='auto' >
        <div  className='imageItem' >
                <Image src={img} alt='Image' />
        </div>
        <Heading marginTop='20px' as='h5' size='sm'>{head}</Heading>
        <Text fontSize='sm'>{para}</Text>
</SimpleGrid>
}