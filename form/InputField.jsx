
function InputField({ label, name, type = "text", value, onChange, error }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={"Enter " + label.toLowerCase()}
      />

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default InputField;




// function InputField() creates a reusable component.
// label is the name displayed above the input.
// name identifies the field, such as email.
// type determines the input type: text, email, or password.
// value stores the current input value.
// onChange updates the value when the user types.
// error displays a validation message when one exists.
// export default InputField allows us to use this component in other files.