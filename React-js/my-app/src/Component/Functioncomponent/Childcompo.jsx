import React, { memo } from 'react';

const Childcompo = (data) => {
    console.log("Childcompo");
    return ( 
        <>
        
        <h3>Childcompo</h3>

        </>
     );
}
 
export default memo(Childcompo);