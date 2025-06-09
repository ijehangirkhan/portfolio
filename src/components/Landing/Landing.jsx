import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { styled } from '@mui/material/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
    FaXTwitter,
    FaLinkedinIn,
    FaGithub,
} from 'react-icons/fa6';

// Styled components (unchanged)
const ResumeButton = styled(Button)((props) => ({
    color: props.theme.primary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    fontSize: '1rem',
    fontWeight: '500',
    height: '50px',
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${props.theme.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
        backgroundColor: props.theme.tertiary,
        color: props.theme.secondary,
        border: `3px solid ${props.theme.tertiary}`,
    },
    '@media (max-width: 600px)': {
        width: '180px',
    },
}));

const ContactButton = styled(Button)((props) => ({
    backgroundColor: props.theme.primary,
    color: props.theme.secondary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: '500',
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${props.theme.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
        backgroundColor: props.theme.secondary,
        color: props.theme.tertiary,
        border: `3px solid ${props.theme.tertiary}`,
    },
    '@media (max-width: 600px)': {
        display: 'none',
    },
}));

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className="landing--container-left"
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        <div className="landing--socials">
                            {socialsData.linkedIn && (
                                <a
                                    href={socialsData.linkedIn}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label='LinkedIn'
                                >
                                    <FaLinkedinIn
                                        className='landing--social'
                                        style={{ color: theme.secondary }}
                                    />
                                </a>
                            )}
                            {socialsData.github && (
                                <a
                                    href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label='GitHub'
                                >
                                    <FaGithub
                                        className='landing--social'
                                        style={{ color: theme.secondary }}
                                    />
                                </a>
                            )}
                            {socialsData.twitter && (
                                <a
                                    href={socialsData.twitter}
                                    target='_blank'
                                    rel='noreferrer'
                                    aria-label='X'
                                >
                                    <FaXTwitter
                                        className='landing--social'
                                        style={{ color: theme.secondary }}
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt={headerData.name}
                    className='landing--img'
                    style={{ borderColor: theme.secondary }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='Jehangir Khan - CV'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <ResumeButton theme={theme}>Download CV</ResumeButton>
                                </a>
                            )}
                            <div>
                                <NavLink to='/#contacts' smooth={true} spy='true' duration={2000}>
                                    <ContactButton theme={theme}>Contact</ContactButton>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
