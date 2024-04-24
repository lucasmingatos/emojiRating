/*

//*************MANEIRA 1 DE FAZER ESSE EXERCÍCIO DE CONDICIONAL*************

const Page = () => {

  //funçao para pegar a hora e formatar
  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format();

  //gerando a frase de acordo com o horário
  const hour = new Date().getHours();
  let greeting = '';

  if(hour >= 0 && hour < 12) {
    greeting = 'Bom dia, Carolzinha.';
  } else if(hour >= 12 && hour < 18){
    greeting = 'Boa tarde, Carolzinha.';
  } else if(hour >= 18 && hour < 23){
    greeting = 'Boa noite, Carolzinha.';
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-b from-indigo-300 to-sky-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">{greeting}</div>
    </div>
  );
}

export default Page;

*/

import { EmojiRating } from "./components/EmojiRating";


//*************MANEIRA 2 DE FAZER ESSE EXERCÍCIO DE CONDICIONAL*************

const Page = () => {

  //funçao para pegar a hora e formatar
  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format();

  //gerando a frase de acordo com o horário
  const hour = new Date().getHours();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-b from-indigo-300 to-sky-500">
      <div className="text-9xl">{fullTime}</div>
      <div className="text-5xl font-bold">
        {hour >= 0 && hour < 12 && "Bom dia, Carolzinha."}
        {hour >= 12 && hour < 18 && "Boa tarde, Carolzinha."}
        {hour >= 18 && hour <= 23 && "Boa noite, Carolzinha."}
      </div>
      <div className="mt-10 text-2xl font-bold text-white">Essa é a nota para o seu dia: </div>
      <EmojiRating rate={4}/>
    </div>
  );
}

export default Page;