import classes from "./Form.module.css";
export default function FormPage() {
  
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" id="fullName" className={classes.input} />

        <fieldset>
          <legend>Select Gender:</legend>

            <input type="radio" name="Male" id="Male" className={classes.radioInput}/>
            <label htmlFor="Male">Male:</label>
         
            <input type="radio" name="Female" id="Female" className={classes.radioInput}/>
            <label htmlFor="Female">Female:</label>
         
        </fieldset>

        <label htmlFor="PhoneNo">Phone No.</label>
        <input
          type="tel"
          name="PhoneNo"
          id="PhoneNo"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          className={classes.input}
        />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" className={classes.input} />

        <label htmlFor="language">Choose a language:</label>
        <select id="language" name="language" className={classes.input}>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C">C</option>
            <option value="C++">C++</option>
        </select>

        <button type="submit" className={classes.submit}>Submit</button>
      </form>
    </div>
  );
}
