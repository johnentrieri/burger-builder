import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
    const controlsArray = controls.map( (ctrl) => (
        <BuildControl 
            label={ctrl.label}
            type={ctrl.type}
            key={ctrl.label}
            addHandler={props.addHandler}
            removeHandler={props.removeHandler} >
        </BuildControl>
    ));

    return(
        <div className={classes.BuildControls}>
            {controlsArray}          
        </div>
    );
}

export default buildControls;