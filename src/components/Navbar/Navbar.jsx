import { SimpleGrid , Heading , Link,Image} from "@chakra-ui/react";
let arr = ['Blog','Register As A Professional','Help Center','Login / Sign Up']

export const Navbar = () => {
    return <SimpleGrid 
    columns={[1,2,2,2,2]}
    style={{
        color:'white',
        width:'80%',
        margin:'auto',
        justifyContent : 'space-between',
        paddingTop:'20px',
    }}
    >
        <Image borderRadius='6px'  width='132px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9ZNwtnV-qiB0Xzm5I7HrnF8tm2PWEBDAGg&usqp=CAU" alt="logo" />
        <SimpleGrid columns={[2,2,4,4,4]}>
            {
                arr.map((el,i)=>{
                    return <Link key={i} href="" isExternal><Heading key={i} as='h3' size='md'>{el}</Heading></Link>
                })
            }
        </SimpleGrid>
    </SimpleGrid>
}