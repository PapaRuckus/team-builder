import React from "react";

const Form = (props) => {
  const { values, change, submit } = props;

  const onChange = (evt) => {
    const { value, name } = evt.target;
    change(name, value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  // const onChange = evt => {
  //   const { value, name } = evt.target;
  //   props.change(name, value)
  // }
  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   props.submit()
  // }

  return (
    <form onSubmit={handleSubmit} className="form container">
      <label>
        Name:
        <input
          type="text"
          placeholder="Enter your name"
          value={values.name}
          name="name"
          onChange={onChange}
        />
        <br />
      </label>
      <label>
        Email:
        <input
          type="email"
          placeholder="Enter your email"
          value={values.email}
          name="email"
          onChange={onChange}
        />
        <br />
      </label>
      <label>
        Role:
        <select value={values.role} name="role" onChange={onChange}>
          <option>-- Select a Role --</option>
          <option>Backend Engineer</option>
          <option>Frontend Engineer</option>
          <option>Data Science</option>
          <option>Designer</option>
        </select>
        <br />
      </label>
      <input type="submit" value="Make a Team!" />
    </form>
  );
};

export default Form;
