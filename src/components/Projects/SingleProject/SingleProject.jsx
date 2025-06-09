import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FaPlay, FaCode } from 'react-icons/fa6';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

// Styled components
const IconButton = styled(motion.a)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    border: `2px solid ${theme.tertiary}`,
    color: theme.tertiary,
    transition: 'all 0.2s',
    '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: 'scale(1.1)',
        border: `2px solid ${theme.secondary}`,
    },
}));

const Icon = styled(motion.span)(({ theme }) => ({
    fontSize: '1.1rem',
    transition: 'all 0.2s',
}));

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
    return (
        <motion.div
            key={id}
            className='singleProject'
            style={{ backgroundColor: theme.primary400 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
        >
            <div className='projectContent'>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    id={name.replace(' ', '-').toLowerCase()}
                    style={{ color: theme.tertiary }}
                >
                    {name}
                </motion.h2>
                <motion.img
                    src={image ? image : placeholder}
                    alt={name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
                <div className='project--showcaseBtn'>
                    <IconButton
                        href={demo}
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-labelledby={`${name
                            .replace(' ', '-')
                            .toLowerCase()} ${name
                            .replace(' ', '-')
                            .toLowerCase()}-demo`}
                    >
                        <Icon
                            as={FaPlay}
                            id={`${name
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                            aria-label='Demo'
                        />
                    </IconButton>
                    <IconButton
                        href={code}
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-labelledby={`${name
                            .replace(' ', '-')
                            .toLowerCase()} ${name
                            .replace(' ', '-')
                            .toLowerCase()}-code`}
                    >
                        <Icon
                            as={FaCode}
                            id={`${name
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                            aria-label='Code'
                        />
                    </IconButton>
                </div>
            </div>
            <motion.p
                className='project--desc'
                style={{
                    background: theme.secondary,
                    color: theme.tertiary,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {desc}
            </motion.p>
            <motion.div
                className='project--lang'
                style={{
                    background: theme.secondary,
                    color: theme.tertiary80,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {tags.map((tag, id) => (
                    <motion.span
                        key={id}
                        whileHover={{ scale: 1.1 }}
                    >
                        {tag}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
}

export default SingleProject;
