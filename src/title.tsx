import React from 'react';

function Title(props: { name: string }) {
    return (
    <>    
    <h1>{props.name}</h1>
    <div className="animated"></div>
    </>
    )
}

export default Title;
