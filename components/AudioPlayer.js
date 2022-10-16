import React, { useState, useRef, useEffect } from 'react'
import styles from "../styles/AudioPlayer.module.css";
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"
import { AudioPlay, CurrentTime, Duration, ForwardBackward } from "../styles/audioPlayStyles"


const AudioPlayer = ({ onCursor }) => {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);


    // references
    const audioPlayer = useRef();   // reference our audio component
    const progressBar = useRef();   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value = duration * 100}`)
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        progressBar.current.value = Number(progressBar.current.value - 15);
        changeRange();
    }

    const forwardThirty = () => {
        progressBar.current.value = Number(progressBar.current.value + 15);
        changeRange();
    }

    return (
        <AudioPlay>
            <audio ref={audioPlayer} src="http://stream.zeno.fm/4sqc41bg84zuv" type="audio/stream"></audio>
            <ForwardBackward>
                <button
                    onMouseEnter={() => onCursor('hover')}
                    onMouseLeave={onCursor}
                    onClick={backThirty}><BsArrowLeftShort />15</button>
            </ForwardBackward>

            <button
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={onCursor}
                onClick={togglePlayPause} className={styles.playPause}>
                {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
            </button>
            <ForwardBackward>
                <button
                    onMouseEnter={() => onCursor('hover')}
                    onMouseLeave={onCursor}
                    onClick={forwardThirty}>15<BsArrowRightShort />
                </button>
            </ForwardBackward>
            {/* current time */}
            <CurrentTime>
                {calculateTime(currentTime)}
            </CurrentTime>

            {/* progress bar */}
            <div>
                <input
                    onMouseEnter={() => onCursor('hover')}
                    onMouseLeave={onCursor}
                    type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div>

            {/* duration */}
            <Duration>
                {(duration && !isNaN(duration)) && calculateTime(duration)}
            </Duration>
        </AudioPlay>
    )
}

export { AudioPlayer }