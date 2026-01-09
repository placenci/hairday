import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"
export async function scheduleFetchByDay(date) {
  try {
    //Faz a requisição
    const response = await fetch(`${apiConfig.baseUrl}/schedules`) 
    //Converte para JSON
    const data = await response.json()
    
    //Filtra agendamento pelos dias selecionados
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))
    return dailySchedules
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar agendamentos do dia selecionado!")    
  }  
}