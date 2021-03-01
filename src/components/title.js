/*
* title
* return name of page
* @author den-dev97 Khaustov D. khausden@gmail.com
* 28.02.2021
*/
import React from 'react';

function Title({header, reflection}) {
    return (
        <div className="page-title">
            <h3 className='title'>
                {header}
                <span className='title-reflection'>{reflection}</span>
            </h3>
        </div>
    )
}

export default Title
