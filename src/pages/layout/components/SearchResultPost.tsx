import { useQueries, useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';

import type { EditedPost, Post, User } from '@/types';
import { openSearch } from '../states/openSearch';

import { getSearchPosts } from '@apis/supabase/supabaseClient';
import { getUser } from '@apis/supabase/supabaseClient';

import { PostPreview } from '@components/PostPreview';
import { Toast } from '@components/Toast';
import SearchNoResult from './SearchNoResult';
import { editPostData } from '@pages/posts/utils/editPostData';
import { PostPreviewItem } from './SearchResultPost.style';
import { FILTER } from '../constants';

interface SearchResultPostProps {
  searchKeyword: string;
  searchFilter: string;
}

const SearchResultPost = ({
  searchKeyword,
  searchFilter
}: SearchResultPostProps) => {
  const setResultShown = useSetRecoilState(openSearch);

  const { data: postData = [], isSuccess: isSuccessPostData } = useQuery({
    queryKey: ['search', searchKeyword, searchFilter],
    queryFn: async () => {
      const data = getSearchPosts(searchKeyword);
      return data;
    },
    suspense: true,
    enabled: searchKeyword !== '' && searchFilter === FILTER['POST']
  });

  const postWithUserData = useQueries({
    queries: postData.map((element) => {
      return {
        queryKey: ['searchPostUser', element.author],
        queryFn: () => getUser(element.author),
        select: (data: User): Post => {
          return {
            ...element,
            author: data
          };
        },
        enabled: isSuccessPostData && postData.length > 0
      };
    })
  });

  const loadingLength = postWithUserData.filter(
    (element) => element.isLoading
  ).length;

  const errorLength = postWithUserData.filter(
    (element) => element.isError
  ).length;

  if (errorLength > 0) {
    return (
      <Toast
        top={61}
        type={'ERROR'}
        content={'포스트를 불러오는 데 실패했습니다. 다시 시도해주세요.'}
      />
    );
  }

  const postPreviewData: EditedPost[] =
    loadingLength < 1
      ? editPostData(postWithUserData?.map(({ data }) => data))
      : [];

  const handlePreviewClick = () => {
    setResultShown(false);
  };

  return (
    <>
      {isSuccessPostData &&
        loadingLength < 1 &&
        (postPreviewData.length > 0 ? (
          postPreviewData.map((post) => {
            const { _id, likes, comments } = post;

            return (
              <PostPreviewItem
                key={_id}
                onClick={handlePreviewClick}>
                <PostPreview
                  post={post}
                  totalLikes={likes.length}
                  totalComments={comments.length}
                  noneProfile={false}
                />
              </PostPreviewItem>
            );
          })
        ) : (
          <SearchNoResult />
        ))}
    </>
  );
};
export default SearchResultPost;
