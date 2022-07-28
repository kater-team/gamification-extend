import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

export default function () {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        const post = this.attrs.post;
        /** Post 增加 楼层显示 */
        items.add('louceng', m("div", post.number() + app.translator.trans('kater-gamificationextend.forum.louceng')));

        /** Post Meta 修改时间格式 */
        // if (items.has("meta")) {
        //     const meta = items.get("meta")
        //     console.log(meta)
        // }
    });
}