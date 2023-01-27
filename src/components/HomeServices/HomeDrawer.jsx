import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
  } from '@chakra-ui/react';
import React from 'react';
import { ServiceItem } from './ServiceItem';

export const HomeDrawer = (el) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
  
    return (
      <>
        <ServiceItem btnRef={btnRef} onOpen={onOpen} {...el} />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Please Select</DrawerHeader>
  
            <DrawerBody>
              {
                (el.other.length>1) ? 
                  el.other.map((el,i)=>{
                    return <div key={i} style={{
                      display:'flex',
                      gap:'20px',
                      marginBottom:'30px',
                      alignItems:'center'
                    }}>
                      <img src={el.sumImg} style={{
                        width:'60px',
                        borderRadius:'10px'
                    }} alt='Image' />
                      <h3>{el.subPara}</h3>
                    </div>
                  })
                :
                <div style={{
                  display:'flex',
                  gap:'20px',
                  marginBottom:'30px',
                  alignItems:'center'
                }}>
                  <img src={el.img} style={{
                    width:'60px',
                    borderRadius:'10px'
                }} alt='Image' />
                  <h3>{el.para}</h3>
                </div>
              }
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }