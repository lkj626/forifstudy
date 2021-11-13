import { MouseEventHandler } from "react";

type TimerButtonType = {
    activated: boolean,
    paused: boolean,
    handleStopTimer: MouseEventHandler<HTMLButtonElement>,
    handleStartTimer: MouseEventHandler<HTMLButtonElement>,
    handlePauseTimer: MouseEventHandler<HTMLButtonElement>,
    handleResumeTimer: MouseEventHandler<HTMLButtonElement>,
}

const TimerButton = ({
    activated, paused, handleStopTimer, handleStartTimer, handlePauseTimer, handleResumeTimer
}: TimerButtonType) => {
    return (
        <div>
            <button onClick={handleStopTimer}>Stop</button>
            {!activated ?
                <button onClick={handleStartTimer}>Start</button>
                : !paused ?
                    <button onClick={handlePauseTimer}>Pause</button>
                    : <button onClick={handleResumeTimer}>Resume</button>
            }
        </div>
    );
}

export default TimerButton;
