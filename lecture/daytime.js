function dayTime() {
  const date = new Date();
  alert(
    "Today is : " +
      date.toLocaleString("en-us", { weekday: "long" }) +
      "\n" +
      "Current time is : " +
      date.toLocaleTimeString("en-us", { hour12: true, hour: "2-digit" }) +
      " : " +
      date.getMinutes() +
      " : " +
      date.getSeconds()
  );
}
