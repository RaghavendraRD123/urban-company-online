import { SimpleGrid , Heading , Link,Image, Box, Text, Button} from "@chakra-ui/react";
import { useState } from "react";
import { ImageCardItem } from "./ImageCardItem";
import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'

export const ImageCard = ({title,sub,Arr,box=4}) =>{
    const [value,setValue] = useState(0);
    const [gridLength,setGrdiLength] = useState(4);
    window.addEventListener('resize',()=>{
        console.log(window.outerWidth);
        const width = window.outerWidth;
        if(width > 1110){
            setGrdiLength(4);
        }else if(width > 720){
            setGrdiLength(3)
        }else if(width > 588){
            setGrdiLength(2)
        }
    })
    const showfn = () => {
        const a = [];
        let n = (Arr.length >= 4) ? 4 : Arr.length;
        for(let i=0;i<n;i++){
                const ImageItem = <ImageCardItem key={i+value} {...Arr[i+value]} />
                a.push(ImageItem)
            }
        return a;
    }

    const handleValuefn = (v) =>{
        setValue(pre=>{
            return pre + v
        })
    }

    // const 

    return <Box>
        <Heading as='h1' size='xl'>{title}</Heading>
        <h2>{value}:{Arr.length}</h2>
        <Text fontSize='xl'>{sub}</Text>
        <div style={{
            display : 'flex',
            border : '1px solid red'
        }}>
            <SimpleGrid border='1px solid green' width='80%' columns={[4,4,4,4,4]} gap='20px' justifyContent='center'  margin='auto' >
                <Button marginTop='65px' position='absolute' zIndex={5} border='2px solid green' disabled={value <= 0}  onClick={()=>handleValuefn(-1)} ><ArrowLeftIcon/></Button>
                {
                    showfn()
                }
                <Button marginTop='65px' position='absolute' justifySelf='flex-end' zIndex={5} disabled={Arr.length-(value+4) <= 0} onClick={()=>handleValuefn(1)} ><ArrowRightIcon/></Button>
            </SimpleGrid>
        </div>
    </Box>
}    