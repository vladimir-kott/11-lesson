import React, {useRef} from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0)
    const [otherState, setOtherState] = useState(false)
    const toggleOtherState = () => {
        setOtherState(!otherState)
    }
    useEffect(() => {
        renderCount.current++
    })
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                 Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
