import React from 'react';
import './VirtualCard.scss';

const VirtualCard = ({ style, children }) => (
    <div
        className="virtual-card"
        style={style}
    >
        {children}
    </div>
);

export default VirtualCard;