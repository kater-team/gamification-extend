import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import NewPostMeta from './components/NewPostMeta';


/*** 废弃 */

export default function () {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        const post = this.attrs.post;

        /** 对 PostMeta 进行替换 */
        if (items.has('meta')) {
            items.setContent("meta", NewPostMeta.component({ post }))
        }
    });
}