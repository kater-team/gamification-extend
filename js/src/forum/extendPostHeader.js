import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import NewPostMeta from './components/NewPostMeta';


export default function () {

    extend(CommentPost.prototype, 'headerItems', function (items) {
        const post = this.attrs.post;
        /** Post 增加 楼层显示 */
        items.add('louceng', m("div", post.number() + app.translator.trans('kater-gamificationextend.forum.louceng')));

        /** 对 PostMeta 进行替换 */
        if (items.has('meta')) {
            items.setContent("meta", NewPostMeta.component({ post }))
        }
    });
}