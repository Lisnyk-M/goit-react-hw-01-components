import React from 'react';
import propTypes from 'prop-types';

function Section({children}) {
    return(
        <section>
            {children}
        </section>
    )
}

Section.propTypes = {
    children: propTypes.node.isRequired 
}
export default Section;