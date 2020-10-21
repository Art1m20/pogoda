import React, {useState}  from 'react';
const api = {
  key:"4e84175102b9fd357fcab30dd96eda80",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

const dateBl =(d) => {
   let months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль",
   "Август","Сентябрь","Октябрь","Ноябрь","Декабрь"  ];
  let days =["Воскресенье","Понедельник","Вторник","Среда","Четверг",
  "Пятница","Суббота"];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `${day} ${date} ${month} ${year}`
}



  return (
    <div className={(typeof weather.main !="undefined")
    ?((weather.main.temp > 16)
    ?'app warm': 'app'):'app' } >
     <main>
       <div className="box">
         <input
          type="text"
          className="bar"
          placeholder="Поиск..."
          onChange={e=>setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
         />
       </div>
       {(typeof weather.main !="undefined")? (
      <div>
         <div className="loc-box">
         <div className="location">{weather.name}</div>
          <div className="date">{dateBl(new Date())}</div>
       </div>
       <div className="wea-box">
          <div className="temp">
            {Math.round(weather.main.temp)}
          </div>
          <div className="wea">
             {weather.weather[0].main}
          </div>
       </div>
      </div>
       ): ('') }
     </main>
    </div>
  );
}

export default App;
