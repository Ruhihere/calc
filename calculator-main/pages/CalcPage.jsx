import { useState } from "react"
import { Button } from "../components/Button.jsx"
import { Output } from "../components/Output.jsx"
export const CalculatorPage = () => {

    var [value, setValue] = useState('');

    const updateValue = (val) => {
        if (val !== '=') {
            if (val === 'AC') {
                value = 0
                setValue('');
            }
            // else {
                // if(val === '/' || val === '*' || val === '+' || val === '-' || val === '%' || val === '.' || val === '(' || val === ')'){
                    // if(value.charAt(value.length-1) !== val) value = setValue(value + val)
                // }else value = setValue(value + val)
            // }
            value = setValue(value + val)
        }
        else{
            try{
                value = setValue(eval(value));
            }catch{
                value = setValue(" ");
                alert("Invalid Expression Try Again");
            } 
        } 
        

    }

    return (<div className="container mt-5">
        <div className="row">
            <Output className="container text-end col-4 mt-5 mb-3 p-3 fs-4" value={value} />
        </div>
        <div className="row gap-2 justify-content-center m-2">
            <Button  className="btn btn-secondary col-1 p-2" val='(' fn={updateValue} />
            <Button className="btn btn-secondary col-1" val=')' fn={updateValue} />
            <Button className="btn btn-secondary col-1" val='%' fn={updateValue} />
            <Button className="btn btn-secondary col-1" val='AC' fn={updateValue} />
        </div>
        <div className="row gap-2 justify-content-center m-2">
            <Button className="btn btn-light border border-2 col-1" val='7' fn={updateValue} />
            <Button className="btn btn-light border border-2 col-1" val='8' fn={updateValue} />
            <Button className="btn btn-light border border-2 col-1" val='9' fn={updateValue} />
            <Button className="btn btn-secondary col-1" val='/' fn={updateValue} />
        </div>
        <div className="row gap-2 justify-content-center m-2">
            <Button className="btn btn-light border border-2 col-1" val='4' fn={updateValue} />
            <Button className="btn btn-light border border-2 col-1" val='5' fn={updateValue} />
            <Button className="btn btn-light border border-2 col-1" val='6' fn={updateValue} />
            <Button className="btn btn-secondary col-1" val='*' fn={updateValue} />
        </div>
        <div className="row gap-2 justify-content-center m-2">
            <Button className="btn btn-light border border-2 col-1" val='1' fn={updateValue} />
            <Button className="btn btn-light border border-2 col-1" val='2' fn={updateValue} />
            <Button className="btn btn-light border border-2 col-1" val='3' fn={updateValue} />
            <Button className="btn btn-secondary col-1" val='-' fn={updateValue} />
        </div>
        <div className="row gap-2 justify-content-center m-2">
            <Button className="btn btn-light border border-2 col-1" val='0' fn={updateValue} />
            <Button className="btn btn-light border border-2 col-1" val='.' fn={updateValue} />
            <Button className="btn btn-primary col-1" val='=' fn={updateValue} />
            <Button className="btn btn-secondary col-1" val='+' fn={updateValue} />
        </div>
    </div>)
}