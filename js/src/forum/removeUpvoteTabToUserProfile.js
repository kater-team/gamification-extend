import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserPage from 'flarum/forum/components/UserPage';

import NewVotesUserPage from './components/NewVotesUserPage';


export default function removeUpvoteTabToUserProfile() {

    if (app.routes['user.votes']) {
        // 覆盖路径
        app.routes['user.votes'] = { path: '/u/:username/votes', component: NewVotesUserPage };
    }

    extend(UserPage.prototype, 'navItems', function (items) {
        if (items.has('votes')) {
            items.remove('votes')
        }
    });
}
