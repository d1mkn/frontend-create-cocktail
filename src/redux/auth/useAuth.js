import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectIsRefreshing, selectUser } from './selectors';
import { signIn, signOut, signUp, refreshUser } from './operations';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const navigation = useNavigate();

  const handleSignIn = user => {
    dispatch(signIn({ ...user }));
  };

  const handleSignUp = user => {
    dispatch(signUp({ ...user }));
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const handleRefreshUser = () => {
    dispatch(refreshUser());
  };

  return {
    isAuth,
    user,
    isRefreshing,
    handleSignIn,
    handleSignUp,
    handleSignOut,
    navigation,
    handleRefreshUser,
  };
};
