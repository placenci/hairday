import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "../schedules/show.js"

//Seleciona o input de data
const selectedDate = document.getElementById("date")
export async function schedulesDay(){
  //Obtem data do input
  const date = selectedDate.value
  //Busca na API agendamentos para carregar no lado direito da tela

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({date})
  //Exibe os agendamentos
  schedulesShow({dailySchedules})

  //Renderiza horas disponiveis
  hoursLoad({date})

  //Os horário disponíveis(horário futuro + ñ agendado) do lado esquerdo(form)
}