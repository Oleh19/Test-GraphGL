import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import client from './apollo/apolloClient';
import { useRecoilState } from 'recoil';
import { GET_ROCKETS } from './graphgl/queries';
import { rocketsState } from './recoil/recoilAtoms';

const App: FC = () => {
  const [rockets, setRockets] = useRecoilState(rocketsState);

  useEffect(() => {
    client
      .query({
        query: GET_ROCKETS,
      })
      .then((response) => {
        setRockets(response.data.rockets);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home rockets={rockets} />}
      />
      <Route
        path="/favorites"
        element={<Favorites />}
      />
    </Routes>
  );
};

export default App;
