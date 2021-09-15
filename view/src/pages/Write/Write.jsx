import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img 
            className="writeImg"
            src="https://wallup.net/wp-content/uploads/2019/09/830495-multi-monitor-dual-screen-widescreen.jpg"
            alt="writeImg"
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="writeIcon far fa-file-image"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                    placeholder="Your story here..."
                    type="text"
                    className="writeInput writeText"
                    >
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
