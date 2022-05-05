import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesSm">وبلاگ دیما</span>
        <span className="headerTitlesLg">Dimah</span>
      </div>
      <img
        loading="lazy"
        className="headerImg"
        src="headerpic.jpg"
        alt="header"
      ></img>
    </div>
  );
}
