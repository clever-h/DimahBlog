import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">درباره من</span>
        <img className="sidebarImg" src="hamidreza.jpg" alt="hamidreza"></img>
        <p>
          حمیدرضا رفیعی متولد 14 شهریور 1370 هستم. دارای مدرک لیسانس نرم افزار
          از دانشگاه آزاد ، علاقمند به برنامه نویسی در حوزه مختلف مانند بک اند و
          فرانت اند و زبان های انگلیسی و فرانسوی مسلط هستم.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">دسته بندی</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">ورزشی</li>
          <li className="sidebarListItem">زبان انگلیسی</li>
          <li className="sidebarListItem">کتاب</li>
          <li className="sidebarListItem">تکنولوژی</li>
          <li className="sidebarListItem">برنامه نویسی</li>
          <li className="sidebarListItem">علمی</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">من را دنبال کنید</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-telegram"></i>
          <i className="sidebarIcon fa-brands fa-whatsapp"></i>
          <i className="sidebarIcon fa-solid fa-at"></i>
        </div>
      </div>
    </div>
  );
}
