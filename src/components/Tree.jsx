import React, { useState } from 'react';

const Tree = () => {
    const [count, setCount] = useState(0);
    const [Wood, setWood] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleHarvest = () => {
        setWood(Wood + 10);
        setCount(0);
    };

    const handleReset = () => {
        setCount(0);
    };

    // Define different ASCII art based on count
    const getAsciiArt = () => {
        switch (true) {
            
case count >= 0 && count < 10:
                return `
/////////////////////////////////`;
            
case count >= 10 && count < 30:
                return `    
     *     *    *  *    
       *    *    *    *  
       *  *    * * .#  *  
     *     * #.  .# *     
             "##
              ##.
              ;#
            ,##.
///////////.###.////////////////`;
            
case count >= 30:
                return `
              * *    
           *    *  *
      *  *    *     *  *
     *     *    *  *    *
 * *   *    *    *    *   *
 *     *  *    * * .#  *   *
 *   *     * #.  .# *   *
  *     "#.  #: #" * *    *
 *   * * "#. ##"       *
   *       "###
             "##
              ##.
              .##:
              :###
              ;###
            ,####.
//////////.######.//////////////`;
        }
    };

    return (
        <div
            style={{
                border: '1px solid white',
                width: 'max-content',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            <pre style={{ userSelect: 'none', fontFamily: 'monospace', whiteSpace: 'pre', margin: '0' }}>
                {getAsciiArt()}
            </pre>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>{count}</div>
        </div>
    );
};

export default Tree;
