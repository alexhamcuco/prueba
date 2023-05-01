import React from 'react';

const Head = () => {
    const myClassName = 'class-name';
    const containerP2 = 'container-p2';

    return (
        <nav>
            <div className={myClassName}>
                this is a className from head
                <div id='myId'>
                    this is an id from head
                </div>
                <div className={containerP2}></div>
            </div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <h3 style={{ textAlign: 'center' }}>GRACIAS POR TU MENSAJE</h3>
            <div className="calendly-inline-widget" data-url="https://calendly.com/spanishwithalex" style={{ minWidth: '320px', height: '660px' }}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
        </nav>
    );
};

export default Head;

