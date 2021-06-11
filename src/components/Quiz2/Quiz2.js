import React, { useState } from 'react';

const Quiz2 = () => {
    const [chooseAnswer, setChooseAnswer] = useState(false)
    const handleChooseAnswer = (e) => {
        setChooseAnswer(true)
    }
    return (
        <div>
            <div className="row mt-5 mx-5 mb-5">
                <div className="col-md-7">
                    <p>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam hic deleniti qui ad accusamus perspiciatis adipisci assumenda aliquam tempore.</p>
                </div>

                <div className="col-md-5">
                    <h4>Lesson 1</h4>
                    <p>Warmup Puzzles</p>
                    <div onClick={handleChooseAnswer} className="choose-answer">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Black
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                White
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                None of the above.
                            </label>
                        </div>
                    </div>

                    <button disabled={chooseAnswer ? false : true} style={{ margin: "20px" }} className="btn btn-secondary d-block">Submit</button>
                    <button className="btn btn-secondary mr-1">Show Explanation</button>
                </div>

            </div>
        </div>
    );
};

export default Quiz2;