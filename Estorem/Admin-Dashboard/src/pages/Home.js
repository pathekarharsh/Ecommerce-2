import React,{useEffect,useState} from 'react'
import '../App.css';
import Navbar from '../components/Navbar';
import Switch from '../components/Switch';




export default function Home() {

    const getCustomers = async() => {

        console.log("hiii")
        const response = await fetch(`http://127.0.0.1:8000/api/customer/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json();
        console.log(json);
    }

    const [isToggled, setisToggled] = useState(false)


    useEffect(() => {
        console.log("logn")
        getCustomers();
    }, []);

    return (
        <div className="container">
            <div className="main bg-tailtertiary h-screen m-0 p-0">
                <Navbar pagename="Dashboard Home Page" />
                <br />
                switch
                <Switch isToggled={isToggled} onToggle={()=>setisToggled(!isToggled)}/>
                {console.log('navbar')}
                <h2 className='font-poppins font-bold text-5xl text-center mt-48'>Welcome to Admin Dashboard</h2>
                
            </div>
        </div>
    )
}

