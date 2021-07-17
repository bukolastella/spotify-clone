import React, { useState, useEffect } from "react";
import classes from "./Audio.module.css";
import { useSelector } from "react-redux";
import Loader from "../../ui/Loader";

const AudioPlayer = (props) => {
  const musicState = useSelector((state) => state.audio.audioData);
  const loadingState = useSelector((state) => state.home.loadingState);
  const [audio, setAudio] = useState(new Audio(`${musicState.preview_url}`));
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(props.display ? props.display : true);
  const [progress, setProgress] = useState("0");
  const [mute, setMute] = useState(false);
  const [value, setValue] = useState("0");
  const [volValue, setVolValue] = useState("50");

  useEffect(() => {
    setAudio(new Audio(`${musicState.preview_url}`));
    audio.pause();
    setProgress("0");
    setLoading(true);
  }, [musicState.preview_url]); // eslint-disable-line react-hooks/exhaustive-deps
  const toggle = () => {
    if (loading) return;
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    audio.addEventListener("timeupdate", () =>
      setProgress((audio.currentTime / audio.duration) * 100)
    );
    audio.addEventListener("canplaythrough", () => {
      setLoading(false);
    });
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  useEffect(() => {
    const value = ((audio.currentTime - 0) / 30) * 100;
    const background =
      "linear-gradient(to right, rgba(7, 236, 7, 0.677)  0%, rgba(7, 236, 7, 0.677)  " +
      value +
      "%, gray " +
      value +
      "%, gray 100%)";
    setValue(background);
  }, [audio.currentTime]);
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };
  const volumeHandler = (ev) => {
    audio.volume = ev / 100;
    const value = ((ev - 0) / 100) * 100;
    const background =
      "linear-gradient(to right, rgba(7, 236, 7, 0.677)  0%, rgba(7, 236, 7, 0.677)  " +
      value +
      "%, gray " +
      value +
      "%, gray 100%)";
    setVolValue(background);

    if (audio.volume === 0) setMute(true);
    else setMute(false);
  };
  const seekSlider = (ev) => {
    audio.currentTime = ev / 3.33;
  };

  return (
    <>
      {!loadingState && (
        <div className={classes.Audio}>
          <div className={classes.player}>
            <div className={classes.picLeft}>
              <div className={classes.imgSpan}>
                {loading ? (
                  <Loader />
                ) : (
                  <img src={musicState.songPic} alt="song cover" />
                )}
              </div>

              <div className={classes.info}>
                <div className={classes.name}>{musicState.songTitle}</div>
                <div className={classes.singer}>{musicState.artist}</div>
              </div>
            </div>

            <div className={classes.btns}>
              <div className={classes["play-pause"]} onClick={toggle}>
                {!playing ? (
                  <i
                    className="fas fa-play-circle fa-2x"
                    style={
                      loading
                        ? {
                            cursor: "not-allowed",
                            pointerEvents: "none",
                            color: "#777676",
                          }
                        : null
                    }
                  ></i>
                ) : (
                  <i
                    className="fas fa-pause-circle fa-2x"
                    style={
                      loading
                        ? {
                            cursor: "not-allowed",
                            pointerEvents: "none",
                            color: "#777676",
                          }
                        : null
                    }
                  ></i>
                )}
              </div>
              <div className={classes.seekSlider}>
                <span>{calculateTime(audio.currentTime)}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(ev) => seekSlider(ev.target.value)}
                  className={classes.progress}
                  style={{
                    background: value,
                  }}
                ></input>
                <span>0.30</span>
              </div>
            </div>

            <div className={classes.volume}>
              {mute ? (
                <i className="fas fa-volume-mute"></i>
              ) : (
                <i className="fas fa-volume-up"></i>
              )}
              <input
                type="range"
                min="0"
                max="100"
                style={{
                  background: volValue,
                }}
                className={classes.volumeControl}
                onChange={(ev) => volumeHandler(ev.target.value)}
              ></input>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;
