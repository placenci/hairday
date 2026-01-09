import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual e define a data mínima como sendo a atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  //Evita que o navegador recarregue
  event.preventDefault()
  //console.log("ENVIADO!")
  try {
    //REcuperando o nome do cliente   
    const name = clientName.value.trim()
    //console.log(name)
    if(!name){
      return alert("Informe o nome do cliente!")
    }
    //Recuperar o horário selecionado
    const HourSelected = document.querySelector(".hour-selected")
    //console.log(HourSelected)

    //Recuperando o horario selecionado
    if(!HourSelected){
      return alert("Informe o horário!")
    }
    //Recuperar somente a hora
    const [hour] = HourSelected.innerText.split(":")
    //Vamos inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");
    //console.log(when)
    //Gerar um ID
    const id = new Date().getTime()
    await scheduleNew({
      id, 
      name, 
      when,
    })
  } catch (error) {
    alert("Não foi possível realizar o agendamento!")  
    console.log(error)
  }
}