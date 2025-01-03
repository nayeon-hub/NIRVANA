import { postUploadPhoto } from '@apis/supabase/supabaseClient';
import { useMutation } from '@tanstack/react-query';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';

interface UseUploadPhotoMutationParams {
  isCover: boolean;
  handleMutate: () => void;
  handleSuccess: () => void;
}

const useUploadPhotoMutation = ({
  isCover,
  handleMutate,
  handleSuccess
}: UseUploadPhotoMutationParams) => {
  const [{ _id }] = useSessionStorage<Pick<User, '_id' | 'token'>>('userData', {
    _id: '',
    token: ''
  });
  const uploadMutation = useMutation(
    (file: File) => postUploadPhoto(file, _id, isCover),
    {
      onMutate: () => {
        handleMutate();
      },
      onSuccess: () => {
        handleSuccess();
      }
    }
  );
  return uploadMutation;
};

export default useUploadPhotoMutation;
