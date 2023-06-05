import s from "./ProjectCard.module.css";

export const ProjectCard = ({ el, setCurrentSlide, currentSlide }) => {
  return (
    <div
      className={currentSlide === el.id ? s.activeSlide : s.container}
      onClick={() => setCurrentSlide(el.id)}
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
  );
};
