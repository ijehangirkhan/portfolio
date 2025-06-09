import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Services, Certifications } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            {/* <Projects /> */}
            <Certifications />
            <Services />
            {/* <Testimonials />
            <Blog /> */}
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
