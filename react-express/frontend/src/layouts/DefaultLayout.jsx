export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <h3>Default Layout</h3>
      { children }
    </div>
  );
};
