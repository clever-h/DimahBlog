import './write.css';

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="backPost.jpg" alt="تصویر انتشار "></img>
      <form className="writeForm">
        <div className="writeFormGroup">
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="عنوان"
            autoFocus={true}
            className="writeInput"
          />
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="راجع یک موضوع بنویسید ...."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          انتشار
        </button>
      </form>
    </div>
  );
}
