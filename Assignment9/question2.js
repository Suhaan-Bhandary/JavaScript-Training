/* 
    Go to youtube. Open any video. 
    Add a button to the page using JS. 
    On click of the button, the video playback speed should change to 10x 
*/
const buttonStyle = `
    color: #0f0f0f;
    background-color: #f1f1f1;
    padding: 0 16px;
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    border-radius: 18px;
    border: transparent;
    outline: transparent;
    margin-inline: 1rem;
    font-weight: 700;
    cursor: pointer;
`;

const speedButton = document.createElement("button");
speedButton.textContent = "Speed 10x";
speedButton.style = buttonStyle;
speedButton.addEventListener("click", toggle10xPlaybackSpeed());

const titleBar = document.getElementById("owner");
titleBar.appendChild(speedButton);

// Finding the video and performing action on it
const videoPlayerClass = ".video-stream.html5-main-video";
const video = document.querySelector(videoPlayerClass);
function toggle10xPlaybackSpeed() {
  let isNormalSpeed = true;

  return () => {
    if (isNormalSpeed) {
      isNormalSpeed = false;
      video.playbackRate = 10;
      speedButton.textContent = "Normal Speed";
    } else {
      isNormalSpeed = true;
      video.playbackRate = 1;
      speedButton.textContent = "Speed 10x";
    }
  };
}
