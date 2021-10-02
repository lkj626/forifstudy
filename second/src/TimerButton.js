let TimerButton = (prop) => {
    let {activated, paused, handlePauseTimer, handleResumeTimer, handleStopTimer, handleStartTimer } = prop;
    
    return (
        <div>
            <button onClick={handleStopTimer}>Stop</button>
            { !activated ? 
                <button onClick={handleStartTimer}>Start</button>
            : !paused ?
            <button onClick= {handlePauseTimer}>Pause</button>
            : <button onClick={handleResumeTimer}>Resume</button> 
            }
        </div>
    );
}

export default TimerButton;
