
import { useState } from "react";

export default function Converter() {
    const [state, setState] = useState('#000000');

    const handleOnChange = ({target}) => {
        const hex = target.value;
        const validColor = /^#[a-f0-9]{6}$/i.test(hex);
        let  backgroundText, background;
        if (!validColor) {
            backgroundText = 'Ошибка!';
            setState((prevData) => ({...prevData, backgroundText, hex}))
        }
        else {
            backgroundText = background = getColor(hex);
            setState((prevData) => ({...prevData, backgroundText, background, hex}))
        }

    };

    const getColor = (hex) => {
        return `rgb(${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)})`;
    };

    return (
        <div className="container" style={{ backgroundColor: state.background }}>
            <input className="ConverterInput" value={state.hex} onChange={handleOnChange} />
            <div className="ConverterResult">{state.backgroundText}</div>
        </div>
    );
}


