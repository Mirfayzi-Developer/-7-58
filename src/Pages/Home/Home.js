import React from 'react'
import img from "../../Assets/images/photo_2022-07-19_14-23-27.jpg"
import img1 from "../../Assets/images/photo_2022-07-19_14-23-41.jpg"
import img2 from "../../Assets/images/photo_2022-03-07_22-20-54.jpg"
import img3 from "../../Assets/images/photo_2022-03-07_22-28-37.jpg"
import img4 from "../../Assets/images/photo_2022-03-08_21-15-49.jpg"
import img5 from "../../Assets/images/photo_2022-03-08_21-26-14.jpg"
import img6 from "../../Assets/images/photo_2022-05-06_17-58-15.jpg"
import img7 from "../../Assets/images/photo_2022-05-13_19-33-04 (2).jpg"
import img8 from "../../Assets/images/photo_2022-05-13_19-33-04.jpg"
import img9 from "../../Assets/images/photo_2022-05-13_19-33-05 (2).jpg"
import img10 from "../../Assets/images/photo_2022-05-13_19-33-05.jpg"
import img11 from "../../Assets/images/photo_2022-05-13_19-33-06 (2).jpg"
import img12 from "../../Assets/images/photo_2022-05-13_19-33-06.jpg"
import img13 from "../../Assets/images/photo_2022-05-13_19-33-08 (2).jpg"
import img14 from "../../Assets/images/photo_2022-05-13_19-33-08.jpg"
import img15 from "../../Assets/images/photo_2022-05-13_19-33-09 (2).jpg"
import img16 from "../../Assets/images/photo_2022-05-13_19-33-09.jpg"
import img17 from "../../Assets/images/photo_2022-05-13_19-33-11.jpg"
import img18 from "../../Assets/images/photo_2022-05-13_19-33-12.jpg"
import img19 from "../../Assets/images/photo_2022-05-13_19-33-13.jpg"
import img20 from "../../Assets/images/photo_2022-05-25_13-54-57.jpg"
import img21 from "../../Assets/images/photo_2022-05-25_13-54-58.jpg"
import img22 from "../../Assets/images/photo_2022-05-27_14-20-55.jpg"
 import img23 from "../../Assets/images/photo_2022-05-13_19-33-57.jpg"

import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SchoolIcon from '@mui/icons-material/School';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div id='wrap'>
    <div className="container">
     <div id="pars">
    <h1><b>Наш класс</b></h1> 
    </div>
       <div id='class'>
          <div  id='class-left'>
           <img id='photo' src={img} alt="class 7J " />
          </div>
          <div id='class-right'>
           <h1>Класс📚 7-Ж</h1>
           <p>Наш класс очень крутой не в плане крутости<br />
            а вплане не обычных и безумных учеников  <br />
            Да и учитель менялся за год один раз😂🤣<br />
            впрочем не важно, в нашем классе есть тпипы людей<br />
            1.Умники 2.Бандиты 3.Боевые девы 4.Пофигисты <br />
            5.ну как говорят в семье и не без уродов</p>
           </div>
        </div>
        <div id="pars">
        <h1><b>Нашa школа</b></h1>
        </div>
          <div id='school'>
          <div  id='school-left'>
          <h1>Школа🏫 №58</h1>
          <p>Вообще обычная такая школа, только с виду<br />
           чтобы в нее поступить надо пройти как мне <br />
           кажется легкий экзамен но для остальных он <br />
           был весьма тяжел,тяжел потому-что в нашей школе<br />
           есть спец классы - "математика"&"английский язык"<br />
           поговаривают чткоро наша школа будет под агенством<br />
           президента, так-что нас ждут новые экзаменыы))<br />
           даже если это страшно звучит((</p>

          </div>
          <div id='school-right' >
          <img id='photo1' src={img1} alt="class 7J " />
           </div>
        </div>
        <Carousel>
                  <div id='car'>
                      <img src={img3} />
                      <p className="legend"> <a href="https://t.me/Shamatova09">Севинч</a></p>
                  </div>
                  <div id='car'>
                      <img src={img4}/>
                      <p className="legend"><a href="https://t.me/OnlyforwardM">Мухаммад фируз</a></p>
                  </div>
                   <div id='car'>
                      <img src={img6}/>
                      <p className="legend"><a href="https://t.me/ismailov_Musavvir">Мусаввир</a></p>
                  </div>
                   <div id='car'>
                      <img src={img7}/>
                      <p className="legend">Зилола</p>
                  </div>
                      <div  id='car'>
                      <img src={img8} />
                      <p className="legend">Хасан</p>
                  </div>
                  <div id='car'>
                      <img src={img9} />
                      <p className="legend"><a href="https://t.me/I_see_youO_o">МИРФАЙЗИ👨‍💻</a></p>
                  </div>
                  <div id='car'>
                      <img src={img10}/>
                      <p className="legend">АЖИНИЯЗ</p>
                  </div>
                   <div id='car'>
                      <img src={img11}/>
                      <p className="legend">Малика</p>
                  </div>
                   <div id='car'>
                      <img src={img12}/>
                      <p className="legend">Буньед</p>
                  </div>
                   <div id='car'>
                      <img src={img13}/>
                      <p className="legend">Нозима</p>
                  </div>
                      <div  id='car'>
                      <img src={img14} />
                      <p className="legend">Даня</p>
                  </div>
                  <div id='car'>
                      <img src={img15} />
                      <p className="legend">Сабора</p>
                  </div>
                  <div id='car'>
                      <img src={img16}/>
                      <p className="legend">Хусан</p>
                  </div>
                   <div id='car'>
                      <img src={img17}/>
                      <p className="legend">Жахонгир </p>
                  </div>
                   <div id='car'>
                      <img src={img18}/>
                      <p className="legend"> <a href="https://t.me/see_you_Again0">Богдан🧑🏿</a></p>
                  </div>
                   <div id='car'>
                      <img src={img19}/>
                      <p className="legend"> <a href="https://t.me/I1o0I1o0">Насибулло</a></p>
                  </div>
                     <div id='car'>
                      <img src={img20}/>
                      <p className="legend">Бехруз +998 93 272 99 76</p>
                  </div>
                   <div id='car'>
                      <img src={img21}/>
                      <p className="legend">Лилия Федоровна👩🏻‍🏫</p>
                  </div>
                   <div id='car'>
                      <img src={img2}/>
                      <p className="legend"> <a href="# ">Асаль</a></p>
                  </div>
               <div id='car'>
                      <img src={img22}/>
                      <p className="legend">Paйхона</p>
                  </div>
                     <div id='car'>
                      <img src={img23}/>
                      <p className="legend">Нигина</p>
                  </div>

              </Carousel>
              <h1>Наш обычный день</h1>
               <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
           Прием пищи🍕
          </Typography>
          <Typography>Ты должен кушать</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          13:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
               <SchoolIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Школа📚
          </Typography>
          <Typography>Ты обязан но не хочешь!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep😴
          </Typography>
          <Typography>Zzzz</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
             И все начинается заново
          </Typography>
          <Typography>Потому-что это твоя нудная жизнь</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    <div id='last'>
     <a href="https://t.me/+HzKwzGPMBcwwN2Ji">Our Telegram </a>
    </div>
    </div> 
    </div>
  )
}

export default Home