import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { AiOutlineFolder } from "react-icons/ai";

import { ThemeContext } from '../../contexts/ThemeContext';
import './Certifications.css';

// Styled components
const CertificationCardWrapper = styled(motion.div)((props) => ({
    backgroundColor: props.theme.primary30,
    '&:hover': {
        backgroundColor: props.theme.primary50,
    },
}));

function CertificationsCard({id, title, details, date, field, image, theme}) {
    return (
        <CertificationCardWrapper 
            key={id} 
            className="certifications-card"
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <div className="achievecard-content">
                <motion.div 
                    className="achievecard-details1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 style={{color: theme.tertiary}}>{title}</h2>
                    <p style={{color: theme.tertiary80}}>{details}</p>
                </motion.div>
                <motion.div 
                    className="achievecard-details2" 
                    style={{color: theme.primary}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h5>{date}</h5>
                    <div className="achievecard-field">
                        <AiOutlineFolder />
                        <h5>{field}</h5>
                    </div>   
                </motion.div>
            </div> 
            <motion.div 
                className="achievecard-imgcontainer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <motion.img 
                    src={image} 
                    alt={title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </CertificationCardWrapper>
    );
}

export default CertificationsCard;
