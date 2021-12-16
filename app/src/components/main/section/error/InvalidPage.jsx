function InvalidPage(props) {
  return (
    <div
      className="invalid-page"
      { ...props }
    >
      <h2>Oh oh! Something bad happen.</h2>
      {props.children}
    </div>
  );
}

export default InvalidPage;
