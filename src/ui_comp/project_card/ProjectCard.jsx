import { dataProjects } from "../../pages/projects/data/data";
import s from "./ProjectCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";

export const ProjectCard = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {dataProjects.map((el) => (
        <SwiperSlide>
          <div>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// export const ProjectCard = () => {
//   return (
//     <div className={s.container}>
//       <div className={s.info}>
//         <p>{dataProjects[0].discript}</p>
//         <div className={s.links}>
//           <a href={dataProjects[0].link_site}>Live Demo</a>
//           <a href={dataProjects[0].link_code}>Code</a>
//         </div>
//       </div>
//       <div className={s.pic}>
//         <img src={dataProjects[0].example_pic} alt="example" />
//       </div>
//     </div>
//   );
// }
