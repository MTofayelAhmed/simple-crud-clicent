
import './App.css'

function App() {
const handleForm=(event)=>{
  event.preventDefault()
  const form = event.target;
  const email = form.email.value;
  const name= form.name.value;
  const user= {name, email}
  console.log(user)
  fetch('http://localhost:5000/users', {
    method: "POST",
    headers: {
      "content-type": 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{
    if(data.insertedId){
      alert('user added successfully')
      form.reset()
    }
    console.log(data)
  })
}

  return (
    <>
      
      <h1>Simple CRUD</h1>
      <form onSubmit={handleForm}>
       <input type="text" name="name" id="" />

     <input type="email" name="email" id="" />
     <input type="submit" value="add User" />

      </form>

      
    </>
  )
}

export default App
