import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

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

function Education() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className="education" id="education" style={{backgroundColor: theme.secondary}}>
            <motion.div 
                className="education-body"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div 
                    className="education-description"
                    variants={containerVariants}
                >
                    <motion.h1 
                        variants={itemVariants}
                        style={{color:theme.primary}}
                    >
                        Education
                    </motion.h1>
                    {educationData.map((edu, index) => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            theme={theme}
                            variants={itemVariants}
                        />
                    ))}
                </motion.div>
                <motion.div 
                    className="education-image"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img 
                        src={theme.eduimg} 
                        alt="Education illustration"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Education
