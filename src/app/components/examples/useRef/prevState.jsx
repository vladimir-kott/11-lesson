import React, {useRef} from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevSate = useRef('')
    const [otherState, setOtherState] = useState('false')
    const toggleOtherState = () => {
        setOtherState(prevSate=>prevSate==="false"?"true":"false")
    }
    useEffect(() => {
        prevSate.current = otherState
    }, [otherState])
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>prev State: {prevSate.current}</p>
            <p>current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
