import React from 'react';
import { motion } from 'framer-motion';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleBlog.css';

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <motion.a
            className="singleBlog"
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
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
            <div 
                className="singleBlog--image" 
                style={{backgroundColor: theme.secondary}}
            >
                <motion.img 
                    src={image ? image : placeholder} 
                    alt={title}
                    whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                    }}
                />
            </div>
            <div className="singleBlog--body">
                <p style={{color: theme.tertiary}}>{date}</p>
                <h3 style={{color: theme.secondary}}>{title}</h3>
                <h6 style={{color: theme.secondary}}>{desc}</h6>
            </div>
        </motion.a>
    );
}

export default SingleBlog;
