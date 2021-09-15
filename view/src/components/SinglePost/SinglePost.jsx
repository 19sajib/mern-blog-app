import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                width="100%"
                src="https://wallup.net/wp-content/uploads/2019/09/830495-multi-monitor-dual-screen-widescreen.jpg" 
                alt="postImage" 
                className="singlePostImg"
                 />
                 <h1 className="singlePostTitle">
                     This is the post tilte
                     <div className="singlePostEdit">
                     <i class="singlePostIcon far fa-edit"></i>
                     <i class="singlePostIcon far fa-trash-alt"></i>
                     </div>
                 </h1>
                 <div className="singlePostInfo">
                     <span className="singlePostAuthor"> Author: <b>Sajib</b>
                      </span>
                      <span className="singlePostDate">
                          1hour ago
                          </span>
                 </div>
                 <p className="singlePostDesc">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                 </p>
            </div>
        </div>
    )
}
