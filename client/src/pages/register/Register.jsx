import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">عضویت </span>
      <form className="registerForm">
        <label>نام کاربری :</label>
        <input
          type="text"
          className="registerInput"
          placeholder="نام کاربری خود را وارد کنید ..."
        />
        <label>ایمیل : </label>
        <input
          type="text"
          className="registerInput"
          placeholder="ایمیل خود را وارد کنید ..."
        />
        <label>پسورد : </label>
        <input
          type="password"
          className="registerInput"
          placeholder="پسورد خود را وارد کنید .."
        />
        <button className="registerButton" type="submit">
          تایید
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          ورود به سایت
        </Link>
      </button>
      <span style={{ color: 'red', marginTop: '10px' }}>!مشکلی پیش آمد</span>
    </div>
  );
}
