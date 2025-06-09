import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';

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

function Experience() {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
            <div className="experience-body">
                <motion.div 
                    className="experience-image"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img 
                        src={theme.expimg} 
                        alt="Experience illustration" 
                    />
                </motion.div>
                <motion.div 
                    className="experience-description"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h1 
                        variants={itemVariants}
                        style={{color:theme.primary}}
                    >
                        Experience
                    </motion.h1>
                    {experienceData.map((exp) => (
                        <ExperienceCard 
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            theme={theme}
                            variants={itemVariants}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Experience;
