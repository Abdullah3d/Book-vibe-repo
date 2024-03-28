
const Form = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }


    return (
      <div>
        <h2 className=" text-center text-3xl font-bold">Book form are here</h2>
        <h3 className="text-center text-3xl font-bold">Please enter your name,email <br/>and password</h3>
          <div className="font-bold text-center text-yellow-700 p-5">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br/> 
                <input type="email" name="email" id="" />
                <br/>
                <input type="password" name="password" id=""/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
      </div>
    );
};

export default Form;