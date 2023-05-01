import React from 'react';



const Footer = () => {
    const myclassName = 'class-name';
    const containerp2 = 'container-p2';
    return (
        <nav >
            <div className={myclassName}>
                this is a className from footer
            </div>
            <div id='myId'>
                this is a id from footer
            </div>
            <div className={containerp2}>
            </div>
        </nav>
    )
};

export default Footer