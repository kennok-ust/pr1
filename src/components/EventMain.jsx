import EventComponent from "./EventComponent";

function EventMain() {
  return (
    <div className="eventMain">
      <div className="eventFuture">
        <h1>Грядущие</h1>
        <EventComponent
          eventImg="4.jpg"
          date="27.11.2022"
          place="Yushin Brothers"
          eventTxt=""
          eventLink1=""
          eventLink1Txt=""
          eventLink2=""
          eventLink2Txt=""
        />
      </div>
      <div className="eventPast">
        <h1>Что было то прошло</h1>
        <EventComponent
          eventImg="3.jpg"
          date="22.10.2022"
          place="Студия Маша и Музыка"
          eventTxt="Ссылка на запить трансляции "
          eventLink1="https://vk.com/wall-208685853_683"
          eventLink1Txt="здесь"
          eventLink2=""
          eventLink2Txt=""
        />
        <EventComponent
          eventImg="2.jpg"
          date="26.08.2022"
          place="АРТ-берег"
          eventTxt="Закрыли летний сезон максимально уютным концертом под коммунальным мостом с чаем, щеночками и обнимашками."
          eventLink1=""
          eventLink1Txt=""
          eventLink2=""
          eventLink2Txt=""
        />
        <EventComponent
          eventImg="1.jpg"
          date="29.05.2022"
          place="Yushin Brothers"
          eventTxt="Подробнее о том как это было "
          eventTxtAnd=" и "
          eventLink1="https://vk.com/wall-208685853_545"
          eventLink1Txt="здесь"
          eventLink2="https://vk.com/wall-208685853_555"
          eventLink2Txt="здесь"
        />
      </div>
    </div>
  );
}

export default EventMain;

// пункты под дату и место, сместить разметку
