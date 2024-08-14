import { useDispatch } from "react-redux";
import { userAction } from "../store/user-slice";
import classes from "./Form.module.css";
import { useNavigate } from "react-router-dom/dist";

export default function FormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(formData){
    const userData = {
      fullName: formData.get("fullName"),
      gender: formData.get("Male") || formData.get("Female"),
      phoneNo: formData.get("PhoneNo"),
      email: formData.get("email"),
      language: formData.get("language")
    }

    dispatch(userAction.formSubmit(userData));
    navigate('quiz')
  }

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} action={handleSubmit} >
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" id="fullName"  className={classes.input} required />

        <fieldset>
          <legend>Select Gender:</legend>

            <input type="radio" name="Male" id="Male" className={classes.radioInput} value="male" />
            <label htmlFor="Male">Male:</label>
         
            <input type="radio" name="Female" id="Female" className={classes.radioInput} value="female" required/>
            <label htmlFor="Female">Female:</label>
         
        </fieldset>

        <label htmlFor="PhoneNo">Phone No.</label>
        <input
          type="tel"
          name="PhoneNo"
          id="PhoneNo"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          className={classes.input}
          required
        />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" className={classes.input} required />

        <label htmlFor="language">Choose a language:</label>
        <select id="language" name="language" className={classes.input} required> 
            <option value="java">Java</option>
            <option value="react">React</option>
            <option value="c">C</option>
        </select>

        <button type="submit" className={classes.submit}>Submit</button>
      </form>
    </div>
  );
}

