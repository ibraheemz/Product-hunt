const Comments = (comments, id) => {
    return (
        <div className="thread-container">
            <div className="user-pic">
                {console.log(comments)}
                <a href={comments.comments.user.profile_url}>
                    <img
                        src={comments.comments.user.image_url['30px']}
                        alt="P.P"
                    />
                </a>
            </div>
            <div className="comment-section">
                <div className="user-thread">
                    <div className="user-info">
                        <span className="user-name">
                            {comments.comments.user.username}
                        </span>
                        <span className="user-headline">
                            {comments.comments.user.headline}
                        </span>
                    </div>
                    <div className="user-comment">
                        <div className="user-comment-body">
                            {comments.comments.body}
                        </div>
                        <div className="post-buttons">
                            <button className="coment-upvopte">
                                Upvote ({comments.comments.votes})
                            </button>
                            <a href="#">Share</a>
                            <a href="#">{comments.comments.user.created_at}</a>
                        </div>
                    </div>
                    <div className="child-comments-thread">
                        {comments.comments.child_comments.map((item) => {
                            ;<>
                                <div className="user-pic">
                                    <a href={item.user.profile_url}>
                                        <img
                                            src={item.user.image_url['30px']}
                                            alt="P.P"
                                        />
                                    </a>
                                </div>
                                <div className="comment-section">
                                    <div className="user-thread">
                                        <div className="user-info">
                                            <span className="user-name">
                                                {item.user.username}
                                            </span>
                                            <span className="user-headline">
                                                {item.user.headline}
                                            </span>
                                        </div>
                                        <div className="user-comment">
                                            <div className="user-comment-body">
                                                {item.body}
                                            </div>
                                            <div className="post-buttons">
                                                <button className="coment-upvopte">
                                                    Upvote ({item.votes})
                                                </button>
                                                <a href="#">Share</a>
                                                <a href="#">
                                                    {item.user.created_at}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comments
