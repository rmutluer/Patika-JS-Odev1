let username = window.prompt("İsminiz nedir?");
const elementMyName = document.getElementById("myName");
elementMyName.innerText = username;

const updateTime = () => {
  var datetime = new Date();

  const elementClock = document.getElementById("myClock");

  const days = [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  elementClock.innerText = `${datetime.toLocaleString()} ${days[datetime.getDay()]}`;
  setTimeout(updateTime, 1000);
};

updateTime();
