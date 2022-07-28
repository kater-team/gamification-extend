import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

import VotesModal from './components/VotesModal';

export default function () {

  /***
    * Post Votes 分化 赞 踩 显示
    */
  extend(CommentPost.prototype, 'actionItems', function (items) {
    const post = this.attrs.post;

    if (items.has("votes")) {
      let votes = items.get("votes")
      votes.children[1] = m("label", {
        className: "Post-points",
        onclick: () => {
          app.modal.show(VotesModal, { post, showTypes: ['upvotes'] })
        }
      }, post.upvotes_sum())
      votes.children[3] = m("label", { 
        className: "Post-points",
        onclick: () => {
          app.modal.show(VotesModal, { post, showTypes: ['downvotes'] })
        } 
      }, parseInt(post.downvotes_sum()) < 6 ? "-" : post.downvotes_sum())
    }

  })

}
