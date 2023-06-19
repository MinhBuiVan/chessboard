import React from 'react'

function Board() {
    const handler = (i, j) => {
        
        const board = (i + j) % 2 === 0 ? 'white' : 'black';
        return board; 
    }

    return (
        <div className='board'>
            <div className='handler'> 
                
            </div>
        </div>
    )
}

export default Board