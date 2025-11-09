import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { AiOutlineFolder } from "react-icons/ai";

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
            style={{
                '--cert-accent': theme.primary,
                '--cert-muted': theme.tertiary80,
                '--cert-text': theme.primary600,
                '--cert-soft': theme.secondary,
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <div className="certcard-timeline" aria-hidden="true">
                <span className="certcard-timeline-line" />
                <span className="certcard-timeline-node" />
            </div>

            <div className="certcard-content">
                <motion.div 
                    className="certcard-meta"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                >
                    <span className="certcard-date" style={{color: theme.tertiary}}>
                        {date}
                    </span>
                    <span className="certcard-field" style={{color: theme.primary}}>
                        <AiOutlineFolder />
                        {field}
                    </span>
                </motion.div>

                <motion.div 
                    className="certcard-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    <h2 style={{color: theme.tertiary}}>{title}</h2>
                    <p style={{color: theme.tertiary80}}>{details}</p>
                </motion.div>
            </div>

            <motion.div 
                className="certcard-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                whileHover={{ scale: 1.05 }}
            >
                <img src={image} alt={title} />
            </motion.div>
        </CertificationCardWrapper>
    );
}

export default CertificationsCard;
