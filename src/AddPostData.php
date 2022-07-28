<?php

/*
 * This file is part of Kater\GamificationExtend
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Kater\GamificationExtend;

use Flarum\Api\Serializer\PostSerializer;
use Flarum\Post\Post;
use Flarum\Settings\SettingsRepositoryInterface;

class AddPostData
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function __invoke(PostSerializer $serializer, Post $post, array $attributes): array
    {
        $actor = $serializer->getActor();

        $canSeeVotes = (bool) $actor->can('canSeeVotes', $post->discussion) && (bool) $actor->can('canSeeVotes', $post);

        if ($canSeeVotes) {
            $attributes['downvotes_sum'] = $post->downvotes()->count();
            $attributes['upvotes_sum'] = $post->upvotes()->count();
        } else {
            $attributes['downvotes_sum'] = 0;
            $attributes['upvotes_sum'] = 0;
        }
        
        return $attributes;
    }
}
