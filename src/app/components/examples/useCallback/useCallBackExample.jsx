import React, {useRef, useState} from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({})
    const withoutCallBack = useRef(0)
    const withCallBack = useRef(0)

    const handleChange = ({target}) => {
        setData(prevState => ({...prevState, [target.name]: target.value}))
    }

    const validateWithoutCallBack = (data) => {
        console.log(data)
    }

    const validateWithCallBack = useCallback((data) => {
        console.log(data)
    }, [])

    useEffect(()=>{
        validateWithoutCallBack(data)
        validateWithCallBack(data)
    }, [data])

    useEffect(()=>{
        withoutCallBack.current++
    }, [validateWithoutCallBack])

    useEffect(()=>{
        withCallBack.current++
    }, [validateWithCallBack])

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
                <p>Render withoutCallBack: {withoutCallBack.current}</p>
                <p>Render withCallBack: {withCallBack.current}</p>
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input 
                    type="email" 
                    className="form-control" 
                    id='email'
                    value = {data.email||""}
                    name="email"
                    onChange={handleChange}
                />
        </CardWrapper>
    );
};

export default UseCallBackExample;
