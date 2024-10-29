import React from 'react';

const HarvestButton = ({ count, onReset }) => {
    if (count <= 30) return null; // Do not render if count is 30 or less

    return (
        <button onClick={onReset} style={{ marginTop: '10px' }}>
            Harvest
        </button>
    );
};

export default HarvestButton;