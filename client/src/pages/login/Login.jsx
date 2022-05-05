import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">ورود به حساب</span>
      <form className="loginForm">
        <label>ایمیل:</label>
        <input
          type="text"
          className="loginInput"
          placeholder="نام کاربری خود را وارد کنید "
        />
        <label>پسورد :</label>
        <input
          type="password"
          className="loginInput"
          placeholder="پسورد خود را وارد کنید"
        />
        <button className="loginButton" type="submit">
          ورود
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          ثبت نام
        </Link>
      </button>
    </div>
  );
}
