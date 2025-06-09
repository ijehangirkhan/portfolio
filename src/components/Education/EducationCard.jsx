import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './Education.css';

// Styled components
const EducationCardWrapper = styled(motion.div)((props) => ({
    backgroundColor: props.theme.primary30,
    '&:hover': {
        backgroundColor: props.theme.primary50,
    },
}));

function EducationCard({ id, institution, course, startYear, endYear, theme, variants }) {
    return (
        <EducationCardWrapper
            key={id}
            className="education-card"
            theme={theme}
            variants={variants}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <motion.div
                className="educard-img"
                style={{ backgroundColor: theme.primary }}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <motion.img
                    src={theme.type === 'light' ? eduImgBlack : eduImgWhite}
                    alt="Education"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                />
            </motion.div>
            <motion.div
                className="education-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                <h4 style={{ color: theme.tertiary }}>{course}</h4>
                <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
            </motion.div>
        </EducationCardWrapper>
    );
}

export default EducationCard;
