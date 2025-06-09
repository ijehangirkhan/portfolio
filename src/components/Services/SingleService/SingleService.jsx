import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../contexts/ThemeContext';
import './SingleService.css';

function SingleService({id, title, icon}) {
    const { theme } = useContext(ThemeContext);

    return (
        <motion.div 
            key={id} 
            className="single-service" 
            style={{backgroundColor: theme.primary400}}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
            }}
        >
            <motion.div 
                className="service-content"  
                style={{color: theme.tertiary}}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                <motion.i 
                    className="service-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                >
                    {icon}
                </motion.i>
                <motion.h4  
                    style={{color: theme.tertiary}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {title}
                </motion.h4>  
            </motion.div>         
        </motion.div>
    );
}

export default SingleService;
