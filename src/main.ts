import './style.css'
import './api'

const timeOfDay = document.querySelector<HTMLSpanElement>("#timeOfDay");

if (!timeOfDay) {
      throw new Error("Issues with the HTM selectors")
    }

const currentHour = new Date().getHours()
console.log(currentHour)

if (currentHour < 12) {
  timeOfDay.innerText = "morning"
  console.log("morning")
} else if (currentHour < 18) {
  console.log("afternoon")
} else {
  console.log("evening")
}
