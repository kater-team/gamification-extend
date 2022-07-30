import app from 'flarum/forum/app';
import humanTime from '../helpers/humanTime';
import fullTime from 'flarum/common/helpers/fullTime';
import PostMeta from 'flarum/forum/components/PostMeta';

export default class NewPostMeta extends PostMeta{
  view() {
    const post = this.attrs.post;
    const time = post.createdAt();
    const permalink = this.getPermalink(post);
    const touch = 'ontouchstart' in document.documentElement;

    // When the dropdown menu is shown, select the contents of the permalink
    // input so that the user can quickly copy the URL.
    const selectPermalink = function (e) {
      setTimeout(() => $(this).parent().find('.PostMeta-permalink').select());

      e.redraw = false;
    };

    return (
      <div className="Dropdown PostMeta">
        <a className="Dropdown-toggle" onclick={selectPermalink} data-toggle="dropdown">
          {humanTime(time)}
        </a>

        <div className="Dropdown-menu dropdown-menu">
          <span className="PostMeta-number">{app.translator.trans('core.forum.post.number_tooltip', { number: post.number() })}</span>{' '}
          <span className="PostMeta-time">{fullTime(time)}</span> <span className="PostMeta-ip">{post.data.attributes.ipAddress}</span>
          {touch ? (
            <a className="Button PostMeta-permalink" href={permalink}>
              {permalink}
            </a>
          ) : (
            <input className="FormControl PostMeta-permalink" value={permalink} onclick={(e) => e.stopPropagation()} />
          )}
        </div>
      </div>
    );
  }
}




