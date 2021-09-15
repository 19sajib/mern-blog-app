import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarItem">
              <span className="sidebarTitle">About Me</span>
              <img 
               src="https://pbs.twimg.com/profile_images/1404642845596667904/BEzbeWoh_400x400.jpg" 
               alt="sajib" />
               <p>Hi there, I am Sajib.</p>
            </div> 

            <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Movie</li>
                <li className="sidebarListItem">Nature</li>
            </ul>
            </div>
 
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>

        </div>
    )
}
