import React from 'react';
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiWinkSmile } from "react-icons/bi";
import { CgSmileSad } from "react-icons/cg";
import { GrPowerReset } from "react-icons/gr";
import s from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback, reset }) => {
    return (
        <div className={s.btn}>
            <button className={s.good}
            onClick={() => updateFeedback('good')}>
                <CgSmileMouthOpen />Good
                </button>
            <button className={s.neutral} 
            onClick={() => updateFeedback('neutral')}>
                <BiWinkSmile /> Neutral
                </button>
            <button className={s.bad}
            onClick={() => updateFeedback('bad')}>
                <CgSmileSad /> Bad
                </button >
            {totalFeedback > 0 && 
            <button className={s.reset} 
            onClick={reset}> <GrPowerReset />
                Reset
                </button>}
        </div>
    );
};

export default Options;
