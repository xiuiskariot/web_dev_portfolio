import { useState, useEffect } from "react";
import { dataProjects } from "../data/data";
import { ProjectCard } from "../../../ui_comp/project_card/ProjectCard";
import s from "./Projects.module.css"

export const Projects = () => {
  const [arrCards, setArrCards] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(2);
  const arrOfId = [1, 2, 3, 4, 5];

  useEffect(() => {
    if (currentSlide === 1) {
      setArrCards([arrOfId.length-1, currentSlide, 2]);
    } else if (currentSlide >= 2 && currentSlide <= 4) {
      const sliced1 = arrOfId.slice(currentSlide - 2, currentSlide);
      const sliced2 = arrOfId.slice(currentSlide, currentSlide + 1);
      setArrCards([...sliced1, ...sliced2]);
    } else if (currentSlide === 5) {
      setArrCards([4, currentSlide, 1]);
    }
  }, [currentSlide]); // eslint-disable-line react-hooks/exhaustive-deps

  function getFiltredArr() {
    return dataProjects.filter((item) => arrCards.includes(item.id));
  }

  return (
    <section className={s.project_cards}>
      {currentSlide === 1 ? (
        <>
          <ProjectCard
            el={dataProjects[4]}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
          />
          <ProjectCard
            el={dataProjects[0]}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
          />
          <ProjectCard
            el={dataProjects[2]}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
          />
        </>
      ) : currentSlide === 5 ? (
        <>
          <ProjectCard
            el={dataProjects[3]}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
          />
          <ProjectCard
            el={dataProjects[4]}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
          />
          <ProjectCard
            el={dataProjects[0]}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
          />
        </>
      ) : (
        getFiltredArr().map((el) => (
          <ProjectCard
            el={el}
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
          />
        ))
      )}
    </section>
  );
};
