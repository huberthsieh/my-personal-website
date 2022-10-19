import React from 'react';

const Layout = props => {
    const { children } = props;

    return (
        <div>
            <h2>This is include layout</h2>
            { children }
        </div>
    );
};

export default Layout;