import React, { useState } from 'react';

const Quiz1 = () => {
    const [chooseAnswer, setChooseAnswer] = useState(false)
    return (
        <div>
            <div className="row mt-5 mx-5 mb-5">
                <div className="col-md-7">
                    <p>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
                    <ul>
                        <li>Joseph is not the youngest.</li>
                        <li>Kevin is the oldest.</li>
                        <li>Nicholas is not the oldest.</li>
                    </ul>

                    <button style={{margin : "20px"}} className="btn btn-secondary">Show Explanation</button>
                    <button  disabled={chooseAnswer ? false : true} className="btn btn-secondary mr-1">Check Answer</button>
                </div>
                <div className="col-md-5">
                    <h4>Lesson 1</h4>
                    <p>Warmup Puzzles</p>
                </div>
            </div>
        </div>
    );
};

export default Quiz1;