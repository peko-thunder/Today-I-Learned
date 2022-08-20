import { FC } from 'react';
import Greets from './Greets';

const name = 'rabbit';

const App: FC = () => (
  <Greets name="Patty" times={4}>
    <span role="img" aria-label={name}>
      🐰
    </span>
  </Greets>
);

export default App;
