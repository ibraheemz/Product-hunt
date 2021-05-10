import { useState } from 'react'
import $ from 'jquery'
import Linkify from 'react-linkify'
const moment = require('moment')
const ChildComments = (item) => {
    const [votes, setVotes] = useState(item.item.votes)
    const [voteOff, setVoteOff] = useState(false)
    // const body = item.item.body
    // const extracttag = /^\100\w*/g.exec(item.item.body)[0]
    // // const targetDiv = document.getElementById('test')
    // console.log('target div  ' + targetDiv)
    // const tagText = extracttag[0]
    // const tagAnchor = <a href="#">{tagText}</a>
    // body.insertBefore(tagAnchor, document.getElementById('test').childNodes[0])
    // // console.log(tagText)
    // {/^\100\w*/g.exec(item.item.body).anchor()} regex to find @+wordafter
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
                    {item.item.user.headline && (
                        <span className="user-headline text-secondary">
                            {'\n'.concat(item.item.user.headline)}
                        </span>
                    )}

                    <div className="user-comment">
                        <div className="user-child-comment-body" id="test">
                            <p id="child-comment-id">
                                <Linkify>{item.item.body}</Linkify>
                            </p>
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
