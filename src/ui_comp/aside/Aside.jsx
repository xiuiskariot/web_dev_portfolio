import s from "./Aside.module.css"
export const Aside = ({ children }) => {
  return (
    <aside className={s.aside}>{children }</aside>
  )
}
