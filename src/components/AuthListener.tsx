import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { clearUser, finishLoading, setUser } from '../store/authSlice';
import { useAppDispatch } from '../store/hooks';

export default function AuthListener() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!auth) {
      dispatch(finishLoading());
      return undefined;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser({ email: currentUser.email, uid: currentUser.uid }));
      } else {
        dispatch(clearUser());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return null;
}
