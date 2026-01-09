import {schedulesDay } from "../schedules/load"
//Selecionar input de data
const selectedDate = document.getElementById("date")
//Recarregar lista horarios qd input data mudar
selectedDate.onchange = () => schedulesDay()