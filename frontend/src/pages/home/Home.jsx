import NavBar from "./components/NavBar";
import "./components/styles.css";
import Projects from "../projects/Projects";
//import axios from "axios";
import { useState} from "react";


const Home=()=>{
    const [username,setUsername]=useState("");
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        return (
            console.log(username)
        )
        
                
    }

    return (
        <div>
            <h1>Autenticacion</h1>
            <div className="row g-2">
                <div className="col-md"></div>
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-floating mb-3" >                        
                            <input type="text" class="form-control" id="floatingInput" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                            <label for="floatingInput"username />
                            <button className="btn btn-dark" type="submit">LogIn</button>                            
                        </div>                        
                    </form>
                </div>
                <Projects username={username}/>          
        </div>
        
        
        
    )
}

export default Home;