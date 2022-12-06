function withLoading(Component) {
  return function ComponentWithLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Loading...</p>;
  };
}

export default withLoading;
