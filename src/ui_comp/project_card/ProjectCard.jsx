import { useState, useEffect } from "react";
import { dataProjects } from "../../pages/projects/data/data";
import s from "./ProjectCard.module.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React from "react";
// import { useEffect } from "react";

export const ProjectCard = () => {
  const [arrCards, setArrCards] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(2);
  const arrOfId = [1, 2, 3, 4, 5];
  let newArr = [...arrOfId];
  useEffect(() => {
    setArrCards(newArr);
  }, [currentSlide]); // eslint-disable-line react-hooks/exhaustive-deps

  if (currentSlide === 1) {
    newArr = [5, currentSlide, 2];
  } else if (currentSlide >= 2 && currentSlide <= 4) {
    const sliced1 = arrOfId.slice(currentSlide - 2, currentSlide);
    const sliced2 = arrOfId.slice(currentSlide, currentSlide + 1);
    newArr = [...sliced1, ...sliced2];
  } else if (currentSlide === 5) {
    newArr = [4, 5, 1];
  }

  function getFiltredArr() {
    return dataProjects.filter((item) => newArr.includes(item.id));
  }

  return (
    <section>
      {getFiltredArr().map((el) => (
        <div
          className={currentSlide === el.id ? s.activeSlide : s.container}
          onClick={() => {
            setCurrentSlide(el.id);
            console.log(el.id);
            console.log(arrCards);
          }}
        >
          <div className={s.info}>
            <p>{el.discript}</p>
            <div className={s.links}>
              <a href={el.link_site}>Live Demo</a>
              <a href={el.link_code}>Code</a>
            </div>
          </div>
          <div className={s.pic}>
            <img src={el.example_pic} alt="example" />
          </div>
        </div>
      ))}
    </section>
  );
};

// export const ProjectCard = () => {
// const settings = {
//   dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   vertical: true,
//   verticalSwiping: true,
//   swipeToSlide: true,
//   beforeChange: function (currentSlide, nextSlide) {
//     console.log("before change", currentSlide, nextSlide);
//   },
//   afterChange: function (currentSlide) {
//     console.log("after change", currentSlide);
//   },
// };

//   return (
//     <section>
//       <Slider {...settings}>
//         {dataProjects.map((el) => (
//           <div className={s.container}>
//             <div className={s.info}>
//               <p>{el.discript}</p>
//               <div className={s.links}>
//                 <a href={el.link_site}>Live Demo</a>
//                 <a href={el.link_code}>Code</a>
//               </div>
//             </div>
//             <div className={s.pic}>
//               <img src={el.example_pic} alt="example" />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export const ProjectCard = () => {
//    const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   return (
//     <section>
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         slidesPerView={3}
//         mousewheel={true}
//         thumbs={{ swiper: setThumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//         direction={"vertical"}
//       >
//         {dataProjects.map((el) => (
//           <SwiperSlide>
//             <div className={s.container}>
//               <div className={s.info}>
//                 <p>{el.discript}</p>
//                 <div className={s.links}>
//                   <a href={el.link_site}>Live Demo</a>
//                   <a href={el.link_code}>Code</a>
//                 </div>
//               </div>
//               <div className={s.pic}>
//                 <img src={el.example_pic} alt="example" />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// export const ProjectCard = () => {
//   return (
//     <section>
//       {dataProjects.map((el) => (
//         <div className={s.container}>
//           <div className={s.info}>
//             <p>{el.discript}</p>
//             <div className={s.links}>
//               <a href={el.link_site}>Live Demo</a>
//               <a href={el.link_code}>Code</a>
//             </div>
//           </div>
//           <div className={s.pic}>
//             <img src={el.example_pic} alt="example" />
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export const ProjectCard = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Scrollbar, EffectCreative]}

//       // onSlideChange={() => console.log("slide change")}
//       // onSwiper={(swiper) => console.log(swiper)}
//       scrollbar={{ draggable: true }}
//       slidesPerView={3}

//     >
//       {dataProjects.map((el) => (
//         <SwiperSlide>
//           <div>
//             <div className={s.info}>
//               <p>{el.discript}</p>
//               <div className={s.links}>
//                 <a href={el.link_site}>Live Demo</a>
//                 <a href={el.link_code}>Code</a>
//               </div>
//             </div>
//             <div className={s.pic}>
//               <img src={el.example_pic} alt="example" />
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export const ProjectCard = () => {
//   return (
//     <div className={s.container}>
//       <div className={s.info}>
//         <p>{dataProjects[4].discript}</p>
//         <div className={s.links}>
//           <a href={dataProjects[4].link_site}>Live Demo</a>
//           <a href={dataProjects[4].link_code}>Code</a>
//         </div>
//       </div>
//       <div className={s.pic}>
//         <img src={dataProjects[4].example_pic} alt="example" />
//       </div>
//     </div>
//   );
// }

// const arrNumber = [4, 5, 1];

// const [a, setA] = useState([]);

// // function filtredArr(arrNumber, arrData) {
// //   setA(arrData.map((e, i) => e.id == arrNumber[i]));
// //   // console.log(arrNumber);
// //   // console.log(arrData);
// //   // return arrNumber.filter(
// //   //   (elem, index) => +elem == +arrData[index].id)
// // }

// useEffect(() => {
//   function filtredArr() {
//     console.log(dataProjects);
//     setA(dataProjects?.filter((e, i) => e.id === arrNumber[+i]));
//     // console.log(arrNumber);
//     // console.log(arrData);
//     // return arrNumber.filter(
//     //   (elem, index) => +elem == +arrData[index].id)
//   }
//   filtredArr();
//   // console.log(a);
// }, []);

// console.log(a);

// // console.log(filtredArr(arrNumber, dataProjects));
