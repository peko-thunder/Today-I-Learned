import { FC, ReactElement } from 'react';

// eslint-disable-next-line react/require-default-props
type Props = { name: string; times?: number; children: ReactElement };

const Greets: FC<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <div>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {[...Array(times)].map((_, index) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <p key={index}>
          Hello, {name}! {children}{' '}
          {/* eslint-disable-line react/jsx-one-expression-per-line */}
        </p>
      ))}
    </div>
  );
};

export default Greets;
