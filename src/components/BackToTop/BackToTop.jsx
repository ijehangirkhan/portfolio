import React, { useState, useContext } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';
import './BackToTop.css';

const StyledIcon = styled(IoIosArrowDropupCircle)(({ theme }) => ({
    fontSize: '3rem',
    color: theme.tertiary,
}));

function BackToTop() {
    const [visible, setVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        setVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className='backToTop'
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.button
                        onClick={scrollToTop}
                        aria-label='Back to top'
                        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <StyledIcon theme={theme} />
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default BackToTop;
