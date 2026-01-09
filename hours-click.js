export function hoursClick(){
  const hours = document.querySelectorAll('.hour-available')
  
  hours.forEach((available) => {
    available.addEventListener("click", (selected) =>{
      //REmove a class hour-seleceted
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected")
      })
      //Adiciona classe li clicada
      selected.target.classList.add("hour-selected")
    })
  })
}