
export default function FormPage(){
   
    function handleFormAction(event, formData){
        event.preventDefault();
        console.log(formData)
    }


    return(
        <form onSubmit={(event) => {handleFormAction(event)}}>
            <label>
                Full Name
                <input type="text" name="userName" required/>
            </label>
            <button type="submit">Submit</button>
        </form> 
    )
}

