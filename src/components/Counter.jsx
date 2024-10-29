import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // Initialize state for count

    const handleClick = () => {
        setCount(count + 1); // Increment count on click
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer', padding: '20px', border: '1px solid black' }}>
            <h1>Count: {count}</h1> {/* Display the current count */}
        </div>
    );
}

export default Counter;

