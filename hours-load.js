import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js" 
import { hoursClick } from "./hours-click.js"
const hours = document.getElementById("hours")

export function hoursLoad({date}){
  //Limpar a lista de horários
  hours.innerHTML = ""
  const opening = openingHours.map((hour) => {
    //console.log(hour) => apenas teste
    const [scheduleHour] = hour.split(":")
    //console.log(scheduleHour)
    //Adicionar a hora na data e verificar se está no passado
    const isHourPaste = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
    //console.log(scheduleHour, isHourPaste)
    
    return {
      hour,
      available: isHourPaste,
    }
  })
  //Renderizar os horários
  opening.forEach(({hour, available}) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if(hour === "9:00"){
      hourHeaderAdd("Manhã")
    }else if(hour === "13:00"){
      hourHeaderAdd("Tarde")
    }else if(hour === "18:00"){
      hourHeaderAdd("Noite")
    }
    hours.append(li)
  })
  //Add o evento de click horarios disponíveis
  hoursClick()
}
function hourHeaderAdd(title){
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title
  hours.append(header)
}