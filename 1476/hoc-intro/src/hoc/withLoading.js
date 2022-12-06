function withLoading(Component){
  return function componentWithLoading({isLoading, ...props}){
    if(!isLoading) return <Component {...props} />
    return <h3>Loading...</h3>
  }
}


export default withLoading;