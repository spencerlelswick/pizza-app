import React from 'react';
import { Link } from "react-router-dom"
import { Image, Button } from '@chakra-ui/react'
import Logo from '../../assets/img/pizza-logo.png'
import CartIcon from '../../assets/img/cart.png'


import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Stack } from '@chakra-ui/react';

export const Navbar = () => {


    return(
        <Box height='76px' display='flex' alignItems='center' justifyContent='center' bg='blue.600' boxShadow='2xl' color='white'>
            
            <Stack
            spacing={8}
            align='center'
            direction='row'
            fontWeight='bold'
            textTransform='uppercase'
            fontFamily='Arial Narrow'
            >
                <Box>
                    <Image  boxSize='76' objectFit='cover' src={Logo} alt='logo' />
                </Box>
                <Link as={Link} to='/'>
                    Order online
                </Link>
                <Link as={Link} to='/location'>
                    Location
                </Link>
                <Link as={Link} to='/menu'>
                    Menu
                </Link>
                <Link as={Link} to='/coupons'>
                    Coupons
                </Link>
                <Link as={Link} to='/tracker'>
                    Tracker
                </Link>
                <Link as={Link} to='/rewards'>
                    Rewards
                </Link>
                <Button
                size='md'
                height='48px'
                width='200px'
                border='2px'
                color='blue.500'
                >
                    Earn points
                </Button>
                <Link as={Link} to='/tracker' align='center' bg='blue.800'>
                    Sign in & earn<br />rewards
                </Link>
                <Image boxSize='14' objectFit='cover' src={CartIcon} alt='Cart icon' ></Image>
            </Stack>
        </Box>
    );
}

export default Navbar;