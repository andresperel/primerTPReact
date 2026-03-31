function Campo({ label, type, textarea }) {
  return (
    <>
      <label>{label}</label>
      {textarea ? (
        <textarea />
      ) : (
        <input type={type} />
      )}
    </>
  );
}

export default Campo;