import "./input.css";

const Input = () => {
  return (
    <>
      <div>
        <div className="inputbox ">
          <input
            className="input"
            type="text"
            required="required"
            //   onChange={handleNameChange}
            //   value={}
          />
          <span>Enter Name</span>
        </div>
      </div>
    </>
  );
};

export default Input;
