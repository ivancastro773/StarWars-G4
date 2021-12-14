function Loader(props) {
  return (
    <div
      className="characters-loader"
      { ...props }
    >
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
