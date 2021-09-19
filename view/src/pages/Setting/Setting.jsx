import './setting.css'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Setting() {
    return (
        <div className="setting">
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img 
                        src="https://pbs.twimg.com/profile_images/1404642845596667904/BEzbeWoh_400x400.jpg" 
                        alt="userPP" 
                        />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon fas fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}} />
                    </div>
                    <label> Username </label>
                    <input type="text" placeholder="Sajib" />
                    <label> Email </label>
                    <input type="eamil" placeholder="sajib@gmail.com" />
                    <label> Password </label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
