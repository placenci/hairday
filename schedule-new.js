import { apiConfig } from "./api-config.js"

export async function scheduleNew({id, name, when}){
  try {
    //Faz requisição enviar dados agendamento
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, name, when}),
    })
    //Exibe mensagem agendamento realizado
    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)    
    alert("Não foi possível agendar. Tente novamente!")
  }
}
