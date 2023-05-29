import { dataProjects } from "../../pages/projects/data/data";
import s from "./ProjectCard.module.css";
import { Swiper, SwiperSlide, Parallax } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, EffectCreative } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";
import "swiper/css/effect-creative";

import React from "react";

export const ProjectCard = () => {
  return (
    <Swiper
      direction={"verical"}
      // modules={[Navigation, Pagination, Scrollbar, EffectCreative]}

      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      // scrollbar={{ draggable: true }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
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
