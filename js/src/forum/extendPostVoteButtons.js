import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import classList from 'flarum/common/utils/classList';
import Button from 'flarum/common/components/Button';


/** 显示弹出榜 */
import VotesModal from './components/VotesModal';
import saveVote from './helpers/saveVote';
import setting from './helpers/setting';

export default function () {

  /***
    * Post Votes 分化 赞 踩 显示
    */
  extend(CommentPost.prototype, 'actionItems', function (items) {

    if (items.has("votes")) {

      // 直接重写
      const post = this.attrs.post;

      //if (!post.canVote()) return;

      const hasDownvoted = post.hasDownvoted();
      const hasUpvoted = post.hasUpvoted();

      const icon = setting('iconName') || 'thumbs';
      const upVotesOnly = setting('upVotesOnly', true);

      const canSeeVotes = post.canSeeVotes();

      // We set canVote to true for guest users so that they can access the login by clicking the button
      const canVote = !app.session.user || post.canVote();

      const onclick = (upvoted, downvoted) => saveVote(post, upvoted, downvoted, (val) => (this.voteLoading = val));

      const new_vote = <div className={classList('CommentPost-votes', setting('useAlternateLayout', true) && 'alternateLayout')}>
        {Button.component({
          icon: this.voteLoading ? undefined : `fas fa-fw fa-${icon}-up`,
          className: classList('Post-vote Post-upvote', hasUpvoted && 'Post-vote--active'),
          loading: this.voteLoading,
          disabled: this.voteLoading || !canVote || !canSeeVotes,
          onclick: () => onclick(!hasUpvoted, false),
          'aria-label': app.translator.trans('fof-gamification.forum.post.upvote_button'),
        }, app.translator.trans('kater-gamificationextend.forum.votes.up'))}

        <label
          className="Post-points"
          onclick={() => app.modal.show(VotesModal, { post, showTypes: ['upvotes'] })}
        >
          {parseInt(post.upvotes_sum()) < 1 ? "-" : post.upvotes_sum()}
        </label>

        {
          !upVotesOnly &&
          Button.component({
            icon: this.voteLoading ? undefined : `fas fa-fw fa-${icon}-down`,
            className: classList('Post-vote Post-downvote', hasDownvoted && 'Post-vote--active'),
            loading: this.voteLoading,
            disabled: !canVote || !canSeeVotes,
            onclick: () => onclick(false, !hasDownvoted),
            'aria-label': app.translator.trans('fof-gamification.forum.post.downvote_button'),
          }, app.translator.trans('kater-gamificationextend.forum.votes.down'))

        }

        {!upVotesOnly &&
          <label
            className="Post-points"
            onclick={() => {
              if(parseInt(post.downvotes_sum()) >5 ) {
                app.modal.show(VotesModal, { post, showTypes: ['downvotes'] })
              }
            }}
          >
            {parseInt(post.downvotes_sum()) < 6 ? "-" : post.downvotes_sum()}
          </label>
        }
      </div >

      items.setContent("votes", new_vote)








      // let votes = items.get("votes")

      // votes.children[1] = m("label", {
      //   className: "Post-points",
      //   onclick: () => {
      //     app.modal.show(VotesModal, { post, showTypes: ['upvotes'] })
      //   }
      // }, post.upvotes_sum())

      // // votes.children[2].children[1].text = "嘘"
      // votes.children[3] = m("label", {
      //   className: "Post-points",
      //   onclick: () => {
      //     app.modal.show(VotesModal, { post, showTypes: ['downvotes'] })
      //   }
      // }, parseInt(post.downvotes_sum()) < 6 ? "-" : post.downvotes_sum())


    }

  })

}
