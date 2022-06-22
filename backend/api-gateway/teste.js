import React from 'react';

export default function Exercicio () {
    const x = [1,2,3,4,5,6];
    return (
        <div>
            <h1>Exercício</h1>
            <ul>
                { x.map(item => (
                    <li key={item}> {item}

                    </li>
                ))

                }
                
                
                </ul>    
        </div>
    );

}
