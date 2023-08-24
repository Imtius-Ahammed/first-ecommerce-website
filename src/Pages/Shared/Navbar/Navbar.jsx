import React from 'react';
import Section_01 from './Section_01/Section_01';
import Section_02 from './Section_02/Section_02';
import Section_03 from './Section_03/Section_03';

const Navbar = () => {
    return (
        <div className='shadow-lg mb-6'>
            <Section_01></Section_01>
            <Section_02></Section_02>
            <Section_03></Section_03>
        </div>
    );
};

export default Navbar;