const time = document.querySelector(".time__current-wrapper");
const showTime = () => {
  const date = new Date();
  const minute = date.getMinutes();
  const hours = date.getHours();
  const second = date.getSeconds();

  const isZeroSeconds = second < 10 ? `0${second}` : second;
  const isZeroMinute = minute < 10 ? `0${minute}` : minute;
  time.innerHTML = `<span>${hours}</span>:<span>${isZeroMinute}</span>:<span>${isZeroSeconds}</span>`;
  setInterval(() => {
    showTime();
  }, 1000);
};

showTime();
