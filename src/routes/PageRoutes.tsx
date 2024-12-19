import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPrivateRoute from './LoginPrivateRoute';
import NotLoginPrivateRoute from './NotLoginPrivateRoute';

import LandingPage from '@pages/landing';
import Layout from '@pages/layout';
import Profile from '@pages/profile';
import SignUp from '@pages/signup';
import LogIn from '@pages/login';
import Posting from '@pages/posting';
import Meditation from '@pages/meditation';
import PasswordUpdate from '@pages/password-update';
import NotFound from '@pages/notFound';
import Posts from '@pages/posts';
import Notice from '@pages/notice';
import PostDetail from '@pages/postDetail/PostDetail';
import { Suspense } from 'react';
import {
  SkeletonPosts,
  PostDetailSkeleton,
  ProfileSkeleton
} from '@components/Skeleton';
import MeditationAction from '@pages/meditation/MeditationAction';

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginPrivateRoute />}>
        <Route
          path='/posting'
          element={<Posting />}
        />
        <Route element={<Layout headerStatus={'back'} />}>
          <Route
            path='/notice'
            element={<Notice />}
          />
          <Route
            path='/posts/:postId'
            element={
              <Suspense fallback={<PostDetailSkeleton />}>
                <PostDetail />
              </Suspense>
            }
          />
        </Route>
        <Route element={<Layout />}>
          <Route path='/setting'>
            <Route
              path='password-update'
              element={<PasswordUpdate />}
            />
          </Route>
          <Route
            path='/profile/:userId'
            element={
              <Suspense fallback={<ProfileSkeleton />}>
                <Profile />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route element={<NotLoginPrivateRoute />}>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/login'
          element={<LogIn />}
        />
      </Route>
      <Route element={<Layout headerStatus={'home'} />}>
        <Route
          path='/posts'
          element={
            <Suspense fallback={<SkeletonPosts />}>
              <Posts />
            </Suspense>
          }
        />
      </Route>
      <Route path='/meditation'>
        <Route
          path=''
          element={<Meditation />}
        />
        <Route
          path='action'
          element={<MeditationAction />}
        />
      </Route>
      <Route
        path='/404'
        element={<NotFound />}
      />
      <Route
        path='/*'
        element={<Navigate to='/404' />}
      />
    </Routes>
  );
};
export default PageRoutes;
