import React, { useEffect, useRef, useState } from "react";
import footerStyle from "./footerStyle";
import { CTX } from "../../../contextApi/StateProvider";
//material-ui
import { Grid, Slider, Typography, Hidden } from "@material-ui/core";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import NextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/RepeatOne";
import VolumeIcon from "@material-ui/icons/VolumeDown";
import PauseIcon from "@material-ui/icons/PauseCircleOutline";
function Footer() {
  const [{ track }] = CTX();
  const [curr, setCurr] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();
  const classes = footerStyle();

  useEffect(() => {
    if (track) {
      setPlaying(true);
    }
  }, [track]);

  const handleClickPlay = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const handleClickPause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const handleVolumeChange = (e, newVal) => {
    audioRef.current.volume = newVal / 100;
  };

  const handleInputCurrTime = (e) => {
    setCurr(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  return (
    <Grid container className={classes.footer}>
      <Hidden only="xs">
        <Grid item sm={4} className={classes.left}>
          <div>
            <img src={track?.album?.images[0].url} alt="" />
          </div>
          <div className={classes.info}>
            <Typography variant="subtitle2">{track?.name}</Typography>
            <Typography variant="caption" color="textSecondary">
              {track?.album?.name}
            </Typography>
          </div>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={4} className={classes.center}>
        <div className={classes.icons}>
          <ShuffleIcon className={classes.icon} />
          <PreviousIcon className={classes.icon} />
          {playing ? (
            <PauseIcon
              className={`${classes.playIcon} ${classes.icon}`}
              onClick={handleClickPause}
            />
          ) : (
            <PlayIcon
              className={`${classes.playIcon} ${classes.icon}`}
              onClick={handleClickPlay}
            />
          )}
          <NextIcon className={classes.icon} />
          <RepeatIcon className={classes.icon} />
        </div>
        {track?.preview_url && (
          <>
            <audio
              onTimeUpdate={(e) => setCurr(e.target.currentTime)}
              ref={audioRef}
              src={track?.preview_url}
              type="audio/mpeg"
              autoPlay
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography variant="caption">
                {curr === 0
                  ? "0:00"
                  : Math.floor(curr) < 10
                  ? "0:0" + Math.floor(curr)
                  : "0:" + Math.floor(curr)}
              </Typography>
              <input
                onChange={handleInputCurrTime}
                value={curr}
                type="range"
                max="30"
                style={{ width: "100%", height: 3 }}
              />
              <Typography variant="caption">0:30</Typography>
            </div>
          </>
        )}
      </Grid>
      <Hidden only="xs">
        <Grid item sm={4} className={classes.right}>
          <VolumeIcon />
          <Slider
            step={10}
            defaultValue={100}
            classes={{ root: classes.slider }}
            onChange={handleVolumeChange}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Footer;
