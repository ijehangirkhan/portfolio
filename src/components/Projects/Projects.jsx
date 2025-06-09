import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { HiArrowRight } from "react-icons/hi";
import { motion } from 'framer-motion';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import SingleProject from './SingleProject/SingleProject';
import './Projects.css';

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
const ViewAllButton = styled(motion.button)(({ theme }) => ({
    color: theme.tertiary,
    backgroundColor: theme.primary,
    transition: 'color 0.2s',
    '&:hover': {
        color: theme.secondary,
        backgroundColor: theme.primary,
    }
}));

const ArrowIcon = styled(HiArrowRight)(({ theme }) => ({
    color: theme.tertiary,
    backgroundColor: theme.secondary70,
    width: '40px',
    height: '40px',
    padding: '0.5rem',
    fontSize: '1.05rem',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    '&:hover': {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
    }
}));

function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <motion.div 
                        className="projects--header"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 style={{color: theme.primary}}>Projects</h1>
                    </motion.div>
                    <div className="projects--body">
                        <motion.div 
                            className="projects--bodyContainer"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {projectsData.slice(0, 3).map(project => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                >
                                    <SingleProject
                                        theme={theme}
                                        id={project.id}
                                        name={project.projectName}
                                        desc={project.projectDesc}
                                        tags={project.tags}
                                        code={project.code}
                                        demo={project.demo}
                                        image={project.image}
                                    />
                                </motion.div>
                            ))}
                        </motion.div> 

                        {projectsData.length > 3 && (
                            <motion.div 
                                className="projects--viewAll"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Link to="/projects">
                                    <ViewAllButton
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View All
                                        <ArrowIcon />
                                    </ViewAllButton>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Projects;
