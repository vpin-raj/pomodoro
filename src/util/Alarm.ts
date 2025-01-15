import alarm from "../assets/notification.mp3";

export const PlayAlarm = () => {
  const alarmSound = new Audio(alarm);
  alarmSound.play();
};
