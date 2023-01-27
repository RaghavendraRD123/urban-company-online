import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export const ServiceItem = ({btnRef,onOpen,img,para}) => {
    return <Box ref={btnRef} onClick={onOpen} h='112px' w='160px' margin='auto'>
        <Image margin='auto' marginTop='25px' h='32px' w='32px' src={img} />
        <Text>{para}</Text>
    </Box>
}