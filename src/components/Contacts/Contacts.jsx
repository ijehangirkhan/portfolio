import React, { useContext, useState } from 'react';
import { Snackbar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {
    FaXTwitter,
    FaLinkedinIn,
    FaGithub,
} from 'react-icons/fa6';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 0.5
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

// Styled components
const FormInput = styled(motion.input)((props) => ({
    width: '100%',
    height: '50px',
    padding: '0.7rem',
    borderRadius: '20px',
    border: `4px solid ${props.$theme.primary80}`,
    backgroundColor: props.$theme.secondary,
    color: props.$theme.tertiary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
        border: `4px solid ${props.$theme.primary600}`,
        outline: 'none',
    },
}));

const FormMessage = styled(motion.textarea)((props) => ({
    width: '100%',
    height: '150px',
    padding: '0.7rem',
    borderRadius: '20px',
    border: `4px solid ${props.$theme.primary80}`,
    backgroundColor: props.$theme.secondary,
    color: props.$theme.tertiary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
        border: `4px solid ${props.$theme.primary600}`,
        outline: 'none',
    },
}));

const InputLabel = styled('label')((props) => ({
    backgroundColor: props.$theme.secondary,
    color: props.$theme.primary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '0 5px',
    transform: 'translate(25px,50%)',
    display: 'inline-flex',
}));

const SocialIcon = styled(motion.a)((props) => ({
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '21px',
    backgroundColor: props.$theme.primary,
    color: props.$theme.secondary,
    transition: '250ms ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
        color: props.$theme.secondary,
        backgroundColor: props.$theme.tertiary,
    },
}));

const DetailsIcon = styled(motion.div)((props) => ({
    backgroundColor: props.$theme.primary,
    color: props.$theme.secondary,
    borderRadius: '50%',
    width: '45px',
    minWidth: '45px',
    height: '45px',
    minHeight: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '23px',
    transition: '250ms ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
        color: props.$theme.secondary,
        backgroundColor: props.$theme.tertiary,
    },
}));

const SubmitButton = styled(motion.button)((props) => ({
    backgroundColor: props.$theme.primary,
    color: props.$theme.secondary,
    transition: '250ms ease-in-out',
    '&:hover': {
        transform: 'scale(1.08)',
        color: props.$theme.secondary,
        backgroundColor: props.$theme.tertiary,
    },
}));

const CustomSnackbarContent = styled('div')((props) => ({
    backgroundColor: props.$theme.primary,
    color: props.$theme.secondary,
    fontFamily: 'var(--primaryFont)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 16px',
}));

// const FormField = styled('div')(({ theme }) => ({
//     marginBottom: '2rem',
//     '& input, & textarea': {
//         width: '100%',
//         padding: '0.7rem',
//         borderRadius: '5px',
//         border: `2px solid ${theme.primary}`,
//         backgroundColor: theme.secondary,
//         color: theme.tertiary,
//         outline: 'none',
//     }
// }));

function Contacts() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div className='contacts' id='contacts' style={{ backgroundColor: theme.secondary }}>
            <motion.div 
                className='contacts--container'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.h1 
                    variants={itemVariants}
                    style={{ color: theme.primary }}
                >
                    Contacts
                </motion.h1>
                <div className='contacts-body'>
                    <motion.div 
                        className='contacts-form'
                        variants={itemVariants}
                    >
                        <form onSubmit={handleContactForm}>
                            <div className='input-container'>
                                <InputLabel $theme={theme} htmlFor='Name'>Name</InputLabel>
                                <FormInput
                                    $theme={theme}
                                    placeholder='Jehangir Khan'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type='text'
                                    name='Name'
                                />
                            </div>
                            <div className='input-container'>
                                <InputLabel $theme={theme} htmlFor='Email'>Email</InputLabel>
                                <FormInput
                                    $theme={theme}
                                    placeholder='hi@jehangir.me'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type='email'
                                    name='_replyto'
                                />
                            </div>
                            <div className='input-container'>
                                <InputLabel $theme={theme} htmlFor='Message'>Message</InputLabel>
                                <FormMessage
                                    $theme={theme}
                                    placeholder='Type your message....'
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type='text'
                                    name='Message'
                                />
                            </div>

                            <div className='submit-btn'>
                                <SubmitButton 
                                    $theme={theme}
                                    type='submit'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <motion.div className='submit-icon'>
                                        {!success ? (
                                            <AiOutlineSend className='send-icon' />
                                        ) : (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <AiOutlineCheckCircle className='success-icon' />
                                            </motion.span>
                                        )}
                                    </motion.div>
                                </SubmitButton>
                            </div>
                        </form>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={open}
                            autoHideDuration={4000}
                            onClose={handleClose}
                        >
                            <CustomSnackbarContent $theme={theme}>
                                {errMsg}
                                <IconButton
                                    size='small'
                                    aria-label='close'
                                    color='inherit'
                                    onClick={handleClose}
                                >
                                    <CloseIcon fontSize='small' />
                                </IconButton>
                            </CustomSnackbarContent>
                        </Snackbar>
                    </motion.div>

                    <motion.div 
                        className='contacts-details'
                        variants={itemVariants}
                    >
                        <a
                            href={`mailto:${contactsData.email}`}
                            className='personal-details'
                        >
                            <DetailsIcon $theme={theme}>
                                <FiAtSign />
                            </DetailsIcon>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.email}
                            </p>
                        </a>
                        {/* <a
                            href={`tel:${contactsData.phone}`}
                            className='personal-details'
                        >
                            <DetailsIcon>
                                <FiPhone />
                            </DetailsIcon>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.phone}
                            </p>
                        </a> */}
                        <div className='personal-details'>
                            <DetailsIcon $theme={theme}>
                                <HiOutlineLocationMarker />
                            </DetailsIcon>
                            <p style={{ color: theme.tertiary }}>
                                {contactsData.address}
                            </p>
                        </div>

                        <motion.div 
                            className='socialmedia-icons'
                            variants={containerVariants}
                        >
                            {socialsData.twitter && (
                                <SocialIcon
                                    $theme={theme}
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaXTwitter aria-label='X' />
                                </SocialIcon>
                            )}
                            {socialsData.github && (
                                <SocialIcon
                                    $theme={theme}
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </SocialIcon>
                            )}
                            {socialsData.linkedIn && (
                                <SocialIcon
                                    $theme={theme}
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </SocialIcon>
                            )}
                            {/* {socialsData.instagram && (
                                <a
                                    href={socialsData.instagram}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaInstagram aria-label='Instagram' />
                                </a>
                            )}
                            {socialsData.medium && (
                                <a
                                    href={socialsData.medium}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaMediumM aria-label='Medium' />
                                </a>
                            )}
                            {socialsData.blogger && (
                                <a
                                    href={socialsData.blogger}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaBloggerB aria-label='Blogger' />
                                </a>
                            )}
                            {socialsData.youtube && (
                                <a
                                    href={socialsData.youtube}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaYoutube aria-label='YouTube' />
                                </a>
                            )}
                            {socialsData.reddit && (
                                <a
                                    href={socialsData.reddit}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaRedditAlien aria-label='Reddit' />
                                </a>
                            )}
                            {socialsData.stackOverflow && (
                                <a
                                    href={socialsData.stackOverflow}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaStackOverflow aria-label='Stack Overflow' />
                                </a>
                            )}
                            {socialsData.codepen && (
                                <a
                                    href={socialsData.codepen}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaCodepen aria-label='CodePen' />
                                </a>
                            )}
                            {socialsData.gitlab && (
                                <a
                                    href={socialsData.gitlab}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaGitlab aria-label='GitLab' />
                                </a>
                            )} */}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                src={theme.contactsimg}
                alt='contacts'
                className='contacts--img'
            />
        </div>
    );
}

export default Contacts;
