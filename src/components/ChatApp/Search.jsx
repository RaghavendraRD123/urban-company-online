import { useState } from "react";
import {
    Input,
    Button,
    SimpleGrid,
    InputRightElement,
    InputGroup,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Image,
  } from '@chakra-ui/react';

export const SearchBar = ({users,getChatsfn,setPerson}) => {
    const [search,setSearch] = useState("");
    const [result,setResult] = useState([]);

    const handleSearchfn = () => {
        console.log("search:",search);
        let arr = users.map((el,i)=>{
            if(el.name.toLowerCase().includes(search.toLowerCase())){
                return el;
            }else{
                return '';
            }
        })
        setResult(arr);
        console.log('arr:',arr,"\nusers:",users)
        setSearch(""); 
    }
  
    return <SimpleGrid>
        <Menu>
            <SimpleGrid display='flex' alignSelf='center' >
            <Input bg='white'
                    pr='4.5rem'
                    placeholder='Enter the name'
                    value={search}
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                    onKeyPress = {(e)=>{
                        if(e.key==='Enter'){
                            handleSearchfn();
                        }
                    }}
                />
                <MenuButton w='150px' onClick={handleSearchfn} as={Button} >Search</MenuButton>
            </SimpleGrid>
            <MenuList  display='grid' br='200px'>
                {
                result.map((el,i)=>{
                    if(el){
                           return <MenuItem minH='48px'
                                onClick={(e)=>{
                                    setPerson(el)
                                    getChatsfn(el);
                                }} key={i}
                           >
                            <Image
                            boxSize='2rem'
                            borderRadius='full'
                            src={el.img}
                            alt={el.name}
                            mr='12px'
                            />
                            <span>{el.name}</span>
                        </MenuItem>
                    }
                })
                }
            </MenuList>
        </Menu>
    </SimpleGrid>
  }
  
  {/* <InputGroup size='md'>
            <SimpleGrid>
                <Input
                    pr='4.5rem'
                    placeholder='Enter the name'
                    value={search}
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                    onKeyPress = {(e)=>{
                        if(e.key==='Enter'){
                            handleSearchfn();
                        }
                    }}
                />
                <SimpleGrid>
                    {
                        result.map((el,i)=>{
                            return <Text onClick={(e)=>{
                                setPerson(el)
                                getChatsfn(el);
                            }} key={i}>{el.name}</Text>
                        })
                    }
                </SimpleGrid>
                
                

            </SimpleGrid>
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleSearchfn}>Search</Button>
            </InputRightElement>
        </InputGroup> */}