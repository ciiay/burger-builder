import React from 'react';

const drawerToggle = (props) => (
    <div onClick={props.clicked}>{props.children}</div>
);

export default drawerToggle;
