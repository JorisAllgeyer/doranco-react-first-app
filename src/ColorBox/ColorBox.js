import React, { useState }  from 'react';
import classes from './ColorBox.module.css';

const ColorBox = (props) => {

    const { colorsChannel } = props;

    // Colors
    const [colors, setColors] = useState([0,0,0]);
    // aurait pu être écrite sous forme d'une fonction à deux 
    // paramètres, ici c'est pour montrer la forme "curifiéée"
    const colorsRiser = (channel) => (colors) => {
        const newColors = [...colors];

        const safeColorChannel = colors[channel] + 10 > 255
            ? 255 
            : colors[channel] + 10;
        
        newColors[channel] = safeColorChannel;
        return newColors;
    }

    const incrementColors = (channel) => {
        // attention, ici 'colorRiser(channel)' retourne une fonction ^^
        setColors(colorsRiser(channel));
    }

    const decrementColors = (channel) => {
        const newColors = [...colors];

        const safeColorChannel = colors[channel] - 10 < 0
            ? 0 
            : colors[channel] - 10;
        
        newColors[channel] = safeColorChannel;
        setColors(newColors);
    }

    return (
        <div>
            { colorsChannel.map(item => {
                return (
                    <div>
                        <span>{item.name.toUpperCase()}: </span>
                        <button onClick={() => incrementColors(item.channel)}>+</button>
                        <button onClick={() => decrementColors(item.channel)}>-</button>
                    </div>
                )
            })}
            <div>{colors[0]}, {colors[1]}, {colors[2]}</div>

            <div className={classes.ColorBox} style={{ background: `rgb(${colors})` }}></div>
        </div>
    )
}

export default ColorBox;