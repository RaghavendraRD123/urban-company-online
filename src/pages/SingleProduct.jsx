import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, SimpleGrid, Image, Heading, Text, } from "@chakra-ui/react";

const img = 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1664598416133-392064.jpeg';
const name = "Image";
const title = "RO Water Purifier";
const Line = <Box h='4px' bg='rgb(237, 237, 237)' ></Box>
const imgArr = [
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655204214451-0512b3.jpeg',
        title : "Ultimate Savings"
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1664598416133-392064.jpeg',
        title : "Mind Detox"
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655204214451-0512b3.jpeg',
        title : "Ultimate Savings"
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655204214451-0512b3.jpeg',
        title : "Mind Detox"
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655204214451-0512b3.jpeg',
        title : "Ultimate Savings"
    },
    {
        img : 'https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655204214451-0512b3.jpeg',
        title : "Mind Detox"
    },
]

const footerArr = [
    {
        head : "Save 15% on every order",
        para : "Get Plus now",
    },
    {
        head : "CRED Pay",
        para : "Cashback up to ₹500",
    },
    {
        head : "Assured cashback on Paytm",
        para : "Up to ₹500 off ",
    },
    {
        head : "Mobikwik | ZIP (Pay Later)",
        para : "Get 5% assured cashback",
    },
    {
        head : "5% Simpl cashback up to ₹750",
        para : "Get up to Rs.750 cashback",
    },
    {
        head : "15% off on Kotak cards",
        para : "15% off up to INR 250 ",
    }
]

export const SingleProduct = () => {
    let data = document.cookie
    console.log(data)

    return <SimpleGrid w='1120px' m='auto' >
        <SimpleGrid gridTemplateColumns="1fr 640px" gap='15px'>
            <Box display='grid' alignItems='center'>
                <SimpleGrid p='0px 16px' >
                    <Box display='flex' gap='16px'> 
                        <Heading as='h1' fontSize='36px'>{title}</Heading>
                        <Box p='6px 16px' border="1px solid rgb(237, 237, 237)"  display='inline-block'  ><CheckCircleIcon /> UC Safe</Box>
                    </Box>
                    <Text mt='16px 16px 0px' p='12px 0px' fontSize='12px'>Want a consultation with our team? <ChevronRightIcon /></Text>      
                </SimpleGrid>
            </Box>
            <Box  m='40px 0px' ><Image borderRadius='15px' w='100%' src={img} alt={name} /></Box>
        </SimpleGrid>
        {Line}
        <Box  position="sticky" zIndex="1" top='0px' bg='white'>
            <SimpleGrid m='32px 0px 16px 0px' gridTemplateColumns="repeat(12,1fr)" gap='16px'>
                {
                    imgArr.map((el,i)=>{
                        return <Box key={i} >
                            <Image borderRadius='10px' boxSize='64px' objectFit="cover" src={el.img} alt='image' m='auto' />
                            <Text mt='8px' textAlign='center' fontSize='12px' >{el.title}</Text>
                        </Box>
                    })
                }
            </SimpleGrid>
        </Box>
        <Box h='4px' bg='rgb(237, 237, 237)' position="sticky" zIndex="1" top='155px'  ></Box>
        <SimpleGrid gridTemplateColumns="736px 1fr">
            <SimpleGrid w='100%' h='3000px' border='1px solid red' display='flex' justifyContent='space-between' >
                <SimpleGrid></SimpleGrid>
                <SimpleGrid w='64px' m='0px 32px' >
                    <Box w='1px' h='100%' bg='rgb(227, 227, 227)'></Box>
                </SimpleGrid>
            </SimpleGrid>
            <SimpleGrid  gap='15px' m='47px 0px 15px 0px' h='479px'  position="sticky"  zIndex="1" top='202px' >
                {
                    footerArr.map((el,i)=>{
                        return <Box key={i} display='inline-flex' p='8px 12px' gap='10px' borderRadius='10px' bg='rgb(245, 245, 245)'  boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" >
                            <CheckCircleIcon mt='3px' />
                            <Box fontSize='12px' display='grid' gap='5px'>
                                <Text fontWeight="bold" >{el.head}</Text>
                                <Text>{el.para}</Text>
                            </Box>
                        </Box>
                    })
                }
            </SimpleGrid>
        </SimpleGrid>
    </SimpleGrid>
}