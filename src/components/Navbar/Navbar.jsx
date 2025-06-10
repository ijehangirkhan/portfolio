import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa6';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import { ThemeContext } from '../../contexts/ThemeContext';

// Styled components
const NavMenuIcon = styled(IoMenuSharp)((props) => ({
    fontSize: '2.5rem',
    color: props.theme.tertiary,
    cursor: 'pointer',
    transform: 'translateY(-10px)',
    transition: 'color 0.3s',
    '&:hover': {
        color: props.theme.primary,
    },
    '@media (max-width: 960px)': {
        fontSize: '2.5rem',
    },
    '@media (max-width: 600px)': {
        fontSize: '2rem',
    },
}));

const StyledDrawer = styled(Drawer)((props) => ({
    '& .MuiDrawer-paper': {
        padding: '0em 1.8em',
        width: '14em',
        fontFamily: 'var(--primaryFont)',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        background: props.theme.secondary,
        overflow: 'hidden',
        borderTopRightRadius: '40px',
        borderBottomRightRadius: '40px',
        '@media (max-width: 960px)': {
            width: '12em',
        },
        '@media (max-width: 600px)': {
            width: '100vw',
            height: '100vh',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            // padding: '0',
        },
    },
}));

const CloseButtonIcon = styled(CloseIcon)((props) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: props.theme.primary,
    position: 'absolute',
    right: 20,
    top: 20,
    transition: 'color 0.2s',
    '&:hover': {
        color: props.theme.tertiary,
    },
    // '@media (max-width: 960px)': {
    //     right: 20,
    //     top: 20,
    // },
}));

const DrawerItem = styled('div')((props) => ({
    margin: '0.5rem auto',
    borderRadius: '78.8418px',
    background: props.theme.secondary,
    color: props.theme.primary,
    width: '85%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '0 20px',
    boxSizing: 'border-box',
    border: `2px solid ${props.theme.primary}`,
    transition: 'background-color 0.2s, color 0.2s',
    '&:hover': {
        background: props.theme.primary,
        color: props.theme.secondary,
    },
    '@media (max-width: 960px)': {
        margin: '1rem auto',
        width: '100%',
        padding: '0 15px',
        height: '55px',
    },
    '@media (max-width: 600px)': {
        margin: '1rem auto',
    },
}));

const DrawerLink = styled('span')((props) => ({
    fontFamily: 'var(--primaryFont)',
    width: '75%',
    fontSize: '1.3rem',
    fontWeight: 600,
    color: props.theme.primary,
    '@media (max-width: 960px)': {
        fontSize: '1.125rem',
    },
}));

const DrawerIcon = styled('span')((props) => ({
    fontSize: '1.6rem',
    color: props.theme.primary,
    '@media (max-width: 960px)': {
        fontSize: '1.385rem',
    },
}));

const navItems = [
    { to: '/', icon: <IoHomeSharp />, text: 'Home' },
    { to: '/#about', icon: <FaUser />, text: 'About' },
    { to: '/#education', icon: <HiDocumentText />, text: 'Education' },
    { to: '/#skills', icon: <FaFolderOpen />, text: 'Skills' },
    { to: '/#experience', icon: <FaFolderOpen />, text: 'Experience' },
    { to: '/#certifications', icon: <FaFolderOpen />, text: 'Certifications' },
    { to: '/#services', icon: <BsFillGearFill />, text: 'Services' },
    { to: '/#contacts', icon: <MdPhone />, text: 'Contact' }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.3 }
    }
};

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                        color: theme.secondary,
                        cursor: 'pointer'
                    }}
                    onClick={() => window.location.href = '/'}
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            window.location.href = '/';
                        }
                    }}
                >
                    Jehangir K.
                </motion.h1>

                <NavMenuIcon onClick={handleDrawerOpen} aria-label='Menu' theme={theme} />
            </div>
            <StyledDrawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                className='drawer'
                disableScrollLock={true}
                theme={theme}
            >
                <div className='div-closebtn'>
                    <CloseButtonIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                        theme={theme}
                    />
                </div>
                <br />

                <AnimatePresence>
                    {open && (
                        <motion.div 
                            key="navlinks"
                            onClick={handleDrawerClose}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <div className='navLink--container'>
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.text}
                                        variants={itemVariants}
                                        custom={index}
                                    >
                                        <NavLink 
                                            to={item.to} 
                                            smooth={true} 
                                            spy='true' 
                                            duration={2000}
                                        >
                                            <DrawerItem theme={theme}>
                                                <DrawerIcon theme={theme}>
                                                    {item.icon}
                                                </DrawerIcon>
                                                <DrawerLink theme={theme}>{item.text}</DrawerLink>
                                            </DrawerItem>
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </StyledDrawer>
        </div>
    );
}

export default Navbar;
