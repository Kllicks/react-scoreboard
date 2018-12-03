import React from 'react';

function ScoreCard(props) {
    return (
        <div>
            <div>
                <h2>
                    Name: {props.name} // Score: {props.score}
                </h2>
                <button onClick={() => props.upClick(props.id)}>+</button>
                <button onClick={() => props.downClick(props.id)}>-</button>
            </div>
        </div>
    );
}

export default ScoreCard;
