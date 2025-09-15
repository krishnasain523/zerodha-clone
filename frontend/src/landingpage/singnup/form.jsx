import { useState } from "react"
import axios from 'axios';
import { useNavigate, NavLink } from "react-router-dom";
export default function Form() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/register", {
      username: username,
      email: email,
      password: password,
    } , { withCredentials: true }).then((res) => {
      console.log(res.data);
      if (res.data.success) {
        window.location.href = res.data.redirecturl;
      }
    })
   


    setusername("");
    setpassword("")
    setemail("")
  }
  return (<>
    <div className="p-10 ">

      <form className="font-normal">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2 items-center "> <label htmlFor="username" className="">Username:</label>
            <input type="text" className="w-100 h-10 bg-blue-200 text-center border rounded-sm" onChange={(e) => setusername(e.target.value)} value={username} placeholder="enter username" name="username" id="user" /></div>

          <div className="flex gap-10 items-center "> <label htmlFor="email">Email:</label>
            <input type="text" onChange={(e) => setemail(e.target.value)} value={email} className="w-100 h-10 bg-blue-200 text-center border rounded-sm" placeholder="enter email" name="email" id="mail" /></div>
          <div className="flex gap-2 items-center ">
            <label htmlFor="password">New Password:</label>
            <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} className="w-50 h-10 bg-blue-200 text-center border rounded-sm" name="password" id="pass" />
          </div>

          <button onClick={handlesubmit} type="submit" className="bg-[#387ED1] px-10 py-[0.3rem] mx-50 rounded-sm text-white font-900 text-xl hover:bg-black">Submit</button>
        </div>
      </form>

    </div>
  </>)
}