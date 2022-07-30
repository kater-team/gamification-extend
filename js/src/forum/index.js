import app from 'flarum/forum/app';

import Model from 'flarum/common/Model';
import Post from 'flarum/common/models/Post';

import extendPostVoteButtons from "./extendPostVoteButtons"
import extendPostHeader from "./extendPostHeader"


/**
 *  小 Bug 在不改动源码的情况下 无法避免  
 *  PostMeta 若在很接近 30天内时 时间自动刷新
 *  有可能从 30天前 => 5 6月   期望为 2022 6月5日 xxx xx:xx:xx 
 * */


app.initializers.add('kater/gamificationextend', () => {
  console.log('[kater/gamificationextend] Hello, forum!');

  Post.prototype.upvotes_sum = Model.attribute('upvotes_sum');
  Post.prototype.downvotes_sum = Model.attribute('downvotes_sum');
  extendPostVoteButtons()
  extendPostHeader()
}, -10);



