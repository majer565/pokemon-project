import MainNagivation from "./mainnavigation";
import style from './layout.module.css';

const Layout = (props) => {
  return (
    <>
      <MainNagivation hidePokemons={props.hidePokemons} />
      <div className={style.container}>{props.children}</div>
    </>
  );
};

export default Layout;
