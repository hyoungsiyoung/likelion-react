import S from './Status.module.css';

{
  /* <h2>승자! : 🟨</h2> */
}
{
  /* <h2>비겼어요... 😳</h2> */
}

function Status() {
  return <h2 className={S.component}>플레이어 : 🟨</h2>;
}

export default Status;
