import "./Campo.css"

function Campo({ label, type, placeholder }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} className ="u-full-width" placeholder={placeholder}
      />
    </>
  );
}

export default Campo;