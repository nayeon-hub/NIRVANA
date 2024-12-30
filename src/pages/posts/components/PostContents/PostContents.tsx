import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '@apis/supabase/supabaseClient';
import useIntersect from '../../hooks/useIntersect';
import { editPostData } from '../../utils/editPostData';

import PostPreviewList from './PostPreviewList';
import { NoPosts } from '../NoPosts';

import { Toast } from '@components/Toast';
import { SkeletonPosts } from '@components/Skeleton';
import { PostsContainer, PostObserverEndPoint } from './PostContents.style';
import { meditationChannelsInfoType } from '@pages/meditation/types';

interface PostItemsProps {
  channel: meditationChannelsInfoType;
}

const PostItems = ({ channel }: PostItemsProps) => {
  const { data, hasNextPage, fetchNextPage, isFetching, isError, isLoading } =
    useInfiniteQuery(
      ['getChannelPosts', channel.id],
      ({ pageParam: offset = 0 }) => getPosts(channel.id, offset),
      {
        getNextPageParam: (lastPage, pages) => {
          if (lastPage.length === 0) return false;
          return pages.length * 10;
        }
      }
    );

  const ref = useIntersect(
    async (entry, observer) => {
      observer.unobserve(entry.target);
      if (hasNextPage && !isFetching) {
        fetchNextPage();
      }
    },
    { threshold: 0.5 }
  );

  if (isError) throw new Error();

  // if (isError) throw Error;

  return (
    <PostsContainer>
      {data &&
        (data.pages[0].length > 0 ? (
          <>
            {data.pages.map((pageData, idx) => (
              <PostPreviewList
                key={idx}
                postsData={editPostData(pageData)}
              />
            ))}
            <PostObserverEndPoint ref={ref} />
          </>
        ) : (
          <NoPosts />
        ))}
      {isLoading && <SkeletonPosts />}
    </PostsContainer>
  );
};

export default PostItems;
