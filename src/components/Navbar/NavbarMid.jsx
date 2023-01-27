import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    SimpleGrid,
    InputGroup,
    InputLeftElement,
    Input,
    Box,
  } from '@chakra-ui/react';
  import { SearchIcon } from '@chakra-ui/icons'

  export const NavbarMid = () =>{
    const location = 'Bangalore'
    return <SimpleGrid columns={[1,1,2,2,2]} style={{
      textShadow:'none',
      color:'black',
      // border:'2px solid blue',
      margin:'auto',
      marginTop:'50px',
      width:'60%',
    }}>
        <Popover>
          <PopoverTrigger>
            <Box
              tabIndex='0'
              role='button'
              aria-label='Some box'
              p={5}
              h='60px'
              w='70%'
              bg = 'white'
              borderRadius = '10px'
              children={location}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight='semibold'>Current Location</PopoverHeader>
            <PopoverArrow bg='pink.500' />
            <PopoverCloseButton bg='purple.500' />
            <PopoverBody>
              Tadaa!! The arrow color and background color is customized. Check the
              props for each component.
            </PopoverBody>
          </PopoverContent>
        </Popover>

          <InputGroup  h='60px'  style={{
            backgroundColor : 'white',
            width:'130%',
            borderRadius:'20px',
          }}>
            <InputLeftElement
              pointerEvents='none'
              h='100%'
              children={<SearchIcon/>}
            />
            <Input type='text' h='100%' placeholder='Search for services' />
          </InputGroup>
    </SimpleGrid>
  }