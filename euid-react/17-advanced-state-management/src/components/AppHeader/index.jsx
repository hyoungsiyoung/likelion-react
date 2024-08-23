import { Link } from 'react-router-dom';
import { IoLogoReact } from 'react-icons/io5';
import S from './style.module.css';

function AppHeader() {
  const authUser = true;

  return (
    <header className={S.component}>
      <Link to="/" className={S.homeLink} aria-label="홈">
        <IoLogoReact />
      </Link>
      {authUser && (
        <div className={S.wrapper}>
          <div className={S.userInfo}>
            <img src="https://placehold.co/20x20?text=photo" alt="" />
            사용자 이름
          </div>
          <button type="button">로그아웃</button>
        </div>
      )}
    </header>
  );
}

export default AppHeader;
