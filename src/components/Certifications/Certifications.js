import React, { useContext} from 'react';

import './Certifications.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { certificationsData } from '../../data/certificationsData'
import CertificationsCard from './CertificationsCard';

function Certifications() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {certificationsData.certifications.length > 0 && (
                <div className="certifications" id="certifications" style={{backgroundColor: theme.secondary}}>
                <div className="certifications-body">
                    <h1 style={{color: theme.primary}}>Certifications</h1>
                    <h4 style={{color:theme.tertiary}}>{certificationsData.bio}</h4>
                </div>
                <div className="certifications-cards">
                    {certificationsData.certifications.map(achieve => ( 
                        <CertificationsCard 
                        key={achieve.id}
                        id={achieve.id}
                        title={achieve.title}
                        details={achieve.details}
                        date={achieve.date}
                        field={achieve.field}
                        image={achieve.image}/>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default Certifications
