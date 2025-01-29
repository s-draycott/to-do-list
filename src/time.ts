const timeOfDay = document.querySelector<HTMLSpanElement>("#timeOfDay");
const imgContainer = document.querySelector<HTMLSpanElement>("#imgContainer")

if (!timeOfDay ||!imgContainer) {
      throw new Error("Issues with the HTM selectors")
    }

const currentHour = new Date().getHours()
if (currentHour < 12) {
  timeOfDay.innerText = " Morning"
  let icon = document.createElement("img")
  icon.src = "/src/content/sunrise-icon.png"
  icon.className = "headingContainer headingContainer__icon"
  imgContainer.appendChild(icon)

} else if (currentHour < 18) {
  timeOfDay.innerText = " Afternoon"
  let icon = document.createElement("img")
  icon.src = "/src/content/sun-icon-2048x2048-9jpgpgzh.png"
  icon.className = "headingContainer headingContainer__icon"
  imgContainer.appendChild(icon)
} else {
  timeOfDay.innerText = " Evening"
  let icon = document.createElement("img")
  icon.src = "/src/content/moon-icon-2048x2047-h5hsykin.png"
  icon.className = "headingContainer headingContainer__icon"
  imgContainer.appendChild(icon)

}
