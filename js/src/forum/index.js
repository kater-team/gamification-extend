import app from 'flarum/forum/app';

import Model from 'flarum/common/Model';
import Post from 'flarum/common/models/Post';


import extendPostVoteButtons from "./extendPostVoteButtons"
import extendPostHeader from "./extendPostHeader"

app.initializers.add('kater/gamificationextend', () => {
  console.log('[kater/gamificationextend] Hello, forum!');

  Post.prototype.upvotes_sum = Model.attribute('upvotes_sum');
  Post.prototype.downvotes_sum = Model.attribute('downvotes_sum');
  extendPostVoteButtons()


  extendPostHeader()


},-10);
