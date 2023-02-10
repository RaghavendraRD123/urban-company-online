import { useEffect ,  useState } from "react";
import { SimpleGrid,Image, Text, Heading, Box, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { Search, SearchBar } from "./Search";
import { Group } from "./Group";

const AllUsers = [
    {
      img : "https://i.pinimg.com/564x/d9/a4/6e/d9a46e4a5bc342952452055f46f2d935.jpg",
      name : "Raghu" ,
      lastMsg : "Hello Raghu",
      lastMessageTime : "11:30am"
    },
    {
      img : "https://i.pinimg.com/564x/d9/a4/6e/d9a46e4a5bc342952452055f46f2d935.jpg",
      name : "Satish" ,
      lastMsg : "Hello world",
      lastMessageTime : "11:30am"
    },
    {
      img : "https://i.pinimg.com/564x/d9/a4/6e/d9a46e4a5bc342952452055f46f2d935.jpg",
      name : "Ravi" ,
      lastMsg : "Hello world",
      lastMessageTime : "11:30am"
    },
    {
      img : "https://i.pinimg.com/564x/d9/a4/6e/d9a46e4a5bc342952452055f46f2d935.jpg",
      name : "Nandu" ,
      lastMsg : "Hello world",
      lastMessageTime : "11:30am"
    },
    ]

const AllChats = [
    {
        msg : "hi",
        sender : "1"
    },
    {
        msg : "hi",
        sender : "2"
    },
    {
        msg : "how r u",
        sender : "1"
    },
    {
        msg : "Fine",
        sender : "2"
    },
    {
        msg : "How r you?",
        sender : "2"
    },
    {
        msg : "Are u sleeping?",
        sender : "2"
    },
    {
        msg : "No",
        sender : "1"
    },
    {
        msg : "good Night",
        sender : "2"
    },
    {
        msg : "gn",
        sender : "1"
    },
]

const logo = "https://i.pinimg.com/564x/d9/a4/6e/d9a46e4a5bc342952452055f46f2d935.jpg";

export const ChatSection = ({name}) => {
    const [users,setUsers] = useState([]);
    const [person,setPerson] = useState(AllUsers[0]);
    const [message,setMessage] = useState("");
    const [chats,setChats] = useState([]);
    const [ht,setHt] = useState(window.outerHeight);
    const [backgroundImg,setBackgroundImg] = useState('https://i.pinimg.com/originals/e3/42/aa/e342aa99d92cb8660fa1918986c595d0.gif')
    const [backImgUrl,setBackImgUrl]= useState("")

    console.log(ht,`${ht-82}px`)

    // get all users in contact
    const getUsersfn = (name) => {
        setUsers(AllUsers);
    }

    useEffect(()=>{
        getUsersfn(name);
    },[])

    useEffect(()=>{
        console.log("person:\n",person)
    },[person])

    const handleSendfn = () => {
        console.log(message);
        const msg = {
            msg : message,
            sender : "1"
        }
        setChats(pre=>{
            return [...pre,msg]
        })
        setMessage("")
    }

    // get Messages
    const getChatsfn = ({name}) => {
        console.log("get messages request:",name)
        setChats(AllChats);
    }

    // show user self Profile
    const showProfilefn = ({name}) => {
        console.log("Show the Profile ")
    }

    // show Othe person Individual Profile
    const showChatterProfile =(person) => {
        const { img ,name ,lastMsg ,lastMessageTime} = person;
        console.log("Show Chatter Profile ",name)
    }

    return <SimpleGrid>
        {/* <Box>
            <Box bg='#86D0C6' >#86D0C6</Box>
            <Box bg='#C7E4D9' >#C7E4D9</Box>
            <Box bg='#95DAEE' >#95DAEE</Box>
            <Box bg='#6ACDE5' >#6ACDE5</Box>
        </Box> */}
        <SimpleGrid bg='blue.100' p='10px' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" display={"inline-flex"} justifyContent="space-between" >
            <Image alignSelf={"center"} src={logo} alt = 'logo' boxSize='50px'/>
            <SearchBar  alignSelf={"center"} users={users} getChatsfn={getChatsfn} setPerson={setPerson} />
            <Image onClick={showProfilefn} src={logo} alt = 'logo' borderRadius='full' boxSize='80px'/>
        </SimpleGrid>
        <SimpleGrid h={`${ht-205}px`} display='grid' gridTemplateColumns="320px 1fr">
            <SimpleGrid bg='#eef5ff'>
                <SimpleGrid  p='10px' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" display='inline-block' >
                {
                    users.map((el,i)=>{
                        return <SimpleGrid 
                        onClick={()=>{
                            setPerson(el);
                            getChatsfn(el);
                        }} 
                        display="flex" 
                        key={i} 
                        justifyContent='space-between'
                        p='10px'
                        >
                            <Image
                                borderRadius='full'
                                boxSize='50px'
                                src={el.img}
                                alt='Image'
                            />
                            <Box>
                                <Heading as='h4' size='md'>{el.name}</Heading>
                                <Text fontSize='md'>{el.lastMsg}</Text>
                            </Box>
                            <Box>
                                {el.lastMessageTime}
                            </Box>
                        </SimpleGrid>
                    })
                }
                </SimpleGrid>
                <Group users={users} />
            </SimpleGrid>
            <SimpleGrid bg='#90faae'  p='10px' boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" display="inline-block" >
                <SimpleGrid>
                <SimpleGrid display="flex" justifyContent='space-between' >
                            <SimpleGrid display='flex' gap='20px'>
                                <Image
                                    borderRadius='full'
                                    boxSize='50px'
                                    src={person.img}
                                    alt='Image'
                                />
                                <Box>
                                    <Heading as='h4' size='md'>{person.name}</Heading>
                                    <Text fontSize='md'>last seen {}</Text>
                                </Box>
                            </SimpleGrid>
                            <Box display='flex'>
                            <Box display='flex'>
                                    <Input bg='white' w='100px' placeholder='Bg Image url' value={backImgUrl} onChange={(e)=>{
                                        setBackImgUrl(e.target.value)
                                    }} />
                                    <Button mr='20px' bg='blue.500' _hover={{ bg : 'white', color : 'blue.500' }} color='white' w='80px' onClick={()=>{
                                        if(backImgUrl){
                                            setBackgroundImg(backImgUrl);
                                        }
                                        setBackImgUrl("");
                                    }} >Add</Button>
                                </Box>
                                <Button onClick={()=>showChatterProfile(person)} >More</Button>
                            </Box>
                        </SimpleGrid>
                </SimpleGrid>
                <SimpleGrid h={`${ht-325}px`} overflow='scroll' backgroundImage={backgroundImg} >
                    {
                        chats.map((el,i)=>{
                            return <SimpleGrid key={i} justifyContent={(el.sender==='2')? "start" : "end"} p='10px' >
                                <Text  bg={(el.sender==='2')? "#6ACDE5" : "green.300"} p='5px' border={'1px solid blue'} borderRadius='10px' display='inline-block' >{person.name} {el.msg}</Text>
                            </SimpleGrid>
                        })
                    }
                </SimpleGrid>
                <SimpleGrid m='auto'  mb='10px' bg='white'>
                    <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        placeholder='Type a message'
                        value={message}
                        onChange={(e)=>{
                            setMessage(e.target.value)
                        }}
                        onKeyPress = {(e)=>{
                            if(e.key==='Enter'){
                                handleSendfn()
                            }
                        }}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem'  _hover={{ bg : 'blue.200', color : 'blue' }}  size='sm' bg='blue.500' color='white'  onClick={handleSendfn}>send</Button>
                    </InputRightElement>
                    </InputGroup>
                </SimpleGrid>
            </SimpleGrid>
        </SimpleGrid>
    </SimpleGrid>
}