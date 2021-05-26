import 'bootstrap/dist/css/bootstrap.min.css'
import ChildComments from './ChildComments'
import { useState } from 'react'
import parse from 'html-react-parser'
import Linkify from 'react-linkify'

const moment = require('moment')

const Comments = (comments, id) => {
    const [currentProductVotes, setCurrentProductVotes] = useState(
        comments.comments.votes
    )
    const [voteButtonOff, setVoteButtonOff] = useState(true)
    const createdAt = comments.comments.created_at
    return (
        <div className="thread-container">
            <div className="user-pic">
                <a href={comments.comments.user.profile_url}>
                    <img
                        className="rounded-circle user-profile-img "
                        src={comments.comments.user.image_url['30px']}
                        alt="P.P"
                    />
                </a>
            </div>
            <div className="comment-section">
                <div className="user-thread">
                    <div className="user-info row pb-1">
                        <span className="user-name">
                            {comments.comments.user.name}
                        </span>

                        {comments.comments.maker && (
                            <div className="user-title-wrapper">
                                <span className="user-title">Maker</span>
                            </div>
                        )}
                    </div>
                    {comments.comments.user.headline && (
                        <span className="user-headline text-secondary">
                            {comments.comments.user.headline}
                        </span>
                    )}
                    <div className="user-comment">
                        <div className="user-comment-body">
                            <br></br>
                            <Linkify>{parse(comments.comments.body)}</Linkify>
                        </div>
                        <div className="post-buttons">
                            <button
                                className="comment-upvote"
                                onClick={() => {
                                    if (voteButtonOff) {
                                        setCurrentProductVotes(
                                            currentProductVotes + 1
                                        )
                                        setVoteButtonOff(false)
                                    }
                                }}
                            >
                                <i class="fas fa-caret-up mr-2"></i>
                                Upvote {''}
                                {currentProductVotes}
                            </button>

                            <a
                                href="#"
                                className="pl-4 text-secondary share-button"
                            >
                                Share
                            </a>
                            <a href="#" className="pl-4">
                                {moment(createdAt).fromNow()}
                            </a>
                        </div>
                        <div className="child-comments-thread">
                            {comments.comments.child_comments.map((item) => (
                                <ChildComments item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comments
