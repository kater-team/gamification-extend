import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from "flarum/common/components/UserCard"
import icon from 'flarum/common/helpers/icon';

export default function () {
    extend(UserCard.prototype, 'infoItems', function (items) {
        const user = this.attrs.user;
        // 替换
        items.setContent(
            'points',
            <div>
                {icon('fas fa-thumbs-up', { style: { color: "gold" } })}
                {app.translator.trans('fof-gamification.forum.user.card.points', {
                    count: user.points(),
                })}
            </div>,
            50
        );
    });
};
