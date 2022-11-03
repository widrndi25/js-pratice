const remaintime = document.querySelector(".remainTime");

function getremaintime() {
  const toDayTime = new Date();
  const christmasTime = new Date("2022-12-25");
  const remainTimeToChristmas = christmasTime - toDayTime;

  const leftTimeToChristmasDay = Math.floor(
    remainTimeToChristmas / (1000 * 60 * 60 * 24)
  );
  const leftTimeToChristmasHour = Math.floor(
    (remainTimeToChristmas / (1000 * 60 * 60)) % 24
  );
  const leftTimeToChristmasMin = Math.floor(
    (remainTimeToChristmas / (1000 * 60)) % 60
  );
  const leftTimeToChristmasSec = Math.floor(
    (remainTimeToChristmas / 1000) % 60
  );

  remaintime.innerText = `${leftTimeToChristmasDay}일 ${leftTimeToChristmasHour}시 \
   ${leftTimeToChristmasMin}분 ${leftTimeToChristmasSec}초`;
}

getremaintime();
setInterval(getremaintime, 1000);
