import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';
import './Experience.css';

// Styled components
const ExperienceCardWrapper = styled(motion.div)((props) => ({
    backgroundColor: props.theme.primary30,
    '&:hover': {
        backgroundColor: props.theme.primary50,
    },
}));

function ExperienceCard({ id, company, jobtitle, startYear, endYear, theme, variants }) {
    return (
        <ExperienceCardWrapper
            key={id}
            className="experience-card"
            theme={theme}
            variants={variants}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <motion.div
                className="expcard-img"
                style={{ backgroundColor: theme.primary }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src={theme.type === 'light' ? expImgBlack : expImgWhite}
                    alt="Experience"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                />
            </motion.div>
            <motion.div
                className="experience-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
            </motion.div>
        </ExperienceCardWrapper>
    );
}

export default ExperienceCard;
