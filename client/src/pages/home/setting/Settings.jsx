import Sidebar from '../../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">ویرایش حساب کاربری </span>
          <i className="settingsDeleteTitle fa-solid fa-user-xmark"></i>
        </div>
        <form className="settingsForm">
          <div className="settingsPP">
            <img src="hamidreza.jpg" alt="تصویر حساب کاربری" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>نام کاربری :</label>
          <input type="text" />
          <label>ایمیل:</label>
          <input type="email" />
          <label>پسورد:</label>
          <input type="password" />
          <button className="settingsSubmit" type="submit">
            ثبت
          </button>
          <span
            style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}
          >
            ... پروفایل به روز شد
          </span>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
