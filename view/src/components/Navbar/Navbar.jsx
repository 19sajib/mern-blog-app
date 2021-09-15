import './navbar.css'

const Navbar = () => {
    return (
        <div className="top">
           <div className="topLeft">
           <i className="topIcon fab fa-facebook-square"></i>
           <i className="topIcon fab fa-instagram-square"></i>
           <i className="topIcon fab fa-twitter-square"></i>
           <i className="topIcon fab fa-linkedin"></i>
           </div>
           <div className="topCenter">
               <ul className="topList">
                   <li className="topListItem">Home</li>
                   <li className="topListItem">About</li>
                   <li className="topListItem">Contact</li>
                   <li className="topListItem">Write</li>
                   <li className="topListItem">Logout</li>
               </ul>
           </div>
           <div className="topRight">
               <img 
               className="topImg"
               src="https://pbs.twimg.com/profile_images/1404642845596667904/BEzbeWoh_400x400.jpg" 
               alt="sajib" />
               <i className="topSearchIcon fas fa-search"></i>
           </div>
        </div>
    )
}

export default Navbar
