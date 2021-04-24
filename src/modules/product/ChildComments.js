import { useState } from 'react'
import $ from 'jquery'
const moment = require('moment')
const ChildComments = (item) => {
    const [votes, setVotes] = useState(item.item.votes)
    const [voteOff, setVoteOff] = useState(false)
    const getTag = (body) => {
        const extracttag = /^\100\w*/g.exec(body)
        console.log(extracttag)
        const tagText = extracttag[0]
        const bodyWithTag = body.replace(tagText, <a href="#">{tagText}</a>)
        console.log(tagText)
        return bodyWithTag
    }
    return (
        <div className="child-comments-wrapper">
            <div className="user-pic">
                <a href={item.item.user.profile_url}>
                    <img
                        className="rounded-circle user-profile-img "
                        src={item.item.user.image_url['30px']}
                        alt="P.P"
                    />
                </a>
            </div>
            <div className="comment-section">
                <div className="user-thread">
                    <div className="user-info row pb-1">
                        <span className="user-name">{item.item.user.name}</span>
                    </div>
                    <span className="user-headline text-secondary">
                        {'\n'.concat(item.item.user.headline)}
                    </span>
                    <div className="user-comment">
                        <div className="user-child-comment-body">
                            {/^\100\w*/g.exec(item.item.body) &&
                                getTag(item.item.body)}
                        </div>
                        <div className="post-buttons">
                            <button
                                className="comment-upvote"
                                onClick={() => {
                                    !voteOff && setVotes(votes + 1)
                                    setVoteOff(true)
                                }}
                            >
                                <i class="fas fa-caret-up mr-2"></i>
                                Upvote {''}
                                {votes}
                            </button>
                            <a
                                href="#"
                                className="pl-4 text-secondary share-button"
                            >
                                Share
                            </a>
                            <a href="#" className="pl-4">
                                {moment(item.item.created_at).fromNow()}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChildComments
