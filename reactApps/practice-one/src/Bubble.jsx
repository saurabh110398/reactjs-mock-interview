import React from 'react'


const Bubble = () => {

    const handleDiv = () => {
        console.log('div clicked');

    }
    const handleSpan = () => {
        console.log('span clicked');

    }
    const handleButton = (e) => {
        console.log('button clicked');
        e.stopPropagation();

    }
    return (
       <>
        {/* <div onClick={handleDiv}>
            <span onClick={handleSpan}>
                <button onClick={handleButton}>Click</button>
            </span>

        </div> */}
        <div onClickCapture={handleDiv}>
            <span onClickCapture={handleSpan}>
                <button onClickCapture={handleButton}>Click</button>
            </span>

        </div>
       </>
    )
}

export default Bubble
