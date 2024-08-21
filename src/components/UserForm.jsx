import { useDispatch, useSelector } from 'react-redux';
import classes from './userForm.module.css';
import { useNavigate } from 'react-router-dom';
import { setUserData, isLoggedIn } from '../store/user-slice';
const UserForm = () => {
  const { fullName, phoneNo, email, language } = useSelector(
    ({ user }) => user.userInfo ?? {}
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setUserData({
        name,
        value,
      })
    );
  }

  const handleSubmit = () => {
    dispatch(isLoggedIn())
    navigate("quiz/1");
  }

  return (
    <div className={classes.wrapper}>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className={classes.input}
          value={fullName}
          onChange={handleUserChange}
          required
        />

        <fieldset>
          <legend>Select Gender:</legend>

          <input
            type="radio"
            name="gender"
            id="Male"
            className={classes.radioInput}
            onChange={handleUserChange}
            value="male"
          />
          <label htmlFor="Male">Male:</label>

          <input
            type="radio"
            name="gender"
            id="Female"
            className={classes.radioInput}
            onChange={handleUserChange}
            value="female"
            required
          />
          <label htmlFor="Female">Female:</label>
        </fieldset>

        <label htmlFor="PhoneNo">Phone No.</label>
        <input
          type="tel"
          name="phoneNo"
          id="PhoneNo"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          className={classes.input}
          onChange={handleUserChange}
          value={phoneNo}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className={classes.input}
          onChange={handleUserChange}
          value={email}
          required
        />

        <label htmlFor="language">Choose a language:</label>
        <select
          id="language"
          name="language"
          className={classes.input}
          onChange={handleUserChange}
          value={language}
          required
        >
          <option value="" disabled >
            Please select a language
          </option>
          <option value="Java">Java</option>
          <option value="React">React</option>
          <option value="C">C</option>
        </select>

        <button type="submit" className={classes.submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;