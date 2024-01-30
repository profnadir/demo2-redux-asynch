import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/actionsCreators';

function App() {

  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();


  return (
    <div className="App">
      <button onClick={() => dispatch(fetchUsers())}>Charger Users</button>
      { isLoading && <h1>Chargement ...</h1>}
      { !isLoading && !error && (
        <div>
          <h1>Nombre of Users {users.length}</h1>
          <ul>
            {
              users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)
            }
          </ul>
        </div>
      )}
      { !isLoading && error && <h1>Error : {error}</h1>}
    </div>
  );
}

export default App;
