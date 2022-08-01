import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import avatar from '../../images/user-avatar.jpeg';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();
  return (
    <div>
      <img src={avatar} alt="avatar" width="30" height="30" />
      <span>Welcome, {name}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        LogOut
      </button>
    </div>
  );
}
