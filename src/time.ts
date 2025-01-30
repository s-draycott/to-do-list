const timeOfDay = document.querySelector<HTMLSpanElement>("#timeOfDay");
const timeImg = document.querySelector<HTMLImageElement>("#timeImg");

if (!timeOfDay || !timeImg) {
      throw new Error("Issues with the HTM selectors")
    }

const currentHour = new Date().getHours()

if (currentHour < 12) {
  timeOfDay.innerText = "Morning"
  timeImg.src = "/to-do-list/src/content/sunrise-icon.png";
} else if (currentHour < 18) {
  timeOfDay.innerText = "Afternoon"
  timeImg.src = "/to-do-list/src/content/sun-icon.png";
} else {
  timeOfDay.innerText = "Evening";
  timeImg.src = "/to-do-list/src/content/moon-icon.png";
}
