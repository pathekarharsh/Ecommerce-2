import React from 'react'
import { useState,useEffect } from "react";
import '../../App.css';
import Navbar from '../Navbar';
import axios from 'axios';
import Switch from '../Switch';


export default function AddSubcategory() {

    const [catarray, setcatarray] = useState([
        { id: 1, category: 'fruits' },
        { id: 2, category: 'vegetables' },
        { id: 3, category: 'dairy' },
        { id: 4, category: 'meat' },
    ])


    const getCatArray = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/category/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const json = await response.json();
        setcatarray(json);
      }


    const [obj, setobj] = useState({
        category: '',
        subcategory: '',
        color: '',
    })

    const [isToggled, setisToggled] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(obj+" "+isToggled)
        axios.post("http://localhost:8000/api/customer/",{
            category:obj.category,
            subcategory:obj.subcategory,
            color:obj.color,
            allowed:isToggled
        })
        .then((response)=>{
            console.log(response);
            setobj({ category: '', subcategory: '', color: ''});
            // e.target.reset();
        })
        .catch((error)=>console.log(error))
    }

    const onDiscard = (e) => {
        e.preventDefault();
        setobj({ category: '', subcategory: '', color: ''});
    }

    const onChange = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        getCatArray();
    }, [])
    

    return (
        <>
            <div className="container">
                <div className="main m-0 p-0 bg-tailtertiary">

                    <Navbar pagename="Add Sub-Category Page" />
                    <div className='h-screen items-center flex pb-32'>

                        <div style={{ width: "800px" }} className='mt-4 bg-white border border-2 rounded-md resize-x mx-auto flex shadow-[0_20px_50px_rgba(8,_100,_150,_0.5)]'>
                            <form className='w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
                                <h2 className='text-center font-bold font-mono text-2xl'>SUB-CATEGORIES</h2>
                                <hr className='w-56 my-2 border-2 mx-auto' />

                                <div className='flex flex-col py-2'>
                                    <label>Choose a Category</label>
                                    <select required name="category" value={obj.category} onChange={onChange} className='border px-2 py-2 mt-1 w-full rounded-md'>
                                        {catarray.map((cat) => (
                                            <option key={cat.id} value={cat.category}>{cat.category}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label>Sub Category</label>
                                    <input required className='border p-2 mt-1 rounded-md' type="text" name='subcategory' value={obj.subcategory} placeholder='Enter Sub Category' onChange={onChange} />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label>Select Header Color</label>
                                    <input value={obj.color} required className='w-full py-1 border mt-2 rounded-md' type="color" name='color' onChange={onChange} placeholder='Enter Category' />

                                </div>
                                <div className='flex py-2'>
                                    <div className='flex-col justify-center'>

                                        <label className='py-3 font-bold'>Product Allowed : yes no toggle button</label>
                                    </div>
                                    <div className='flex-col justify-center'>
                                        {/* <input required value={obj.productcatallowed} type="" name="productcatallowed" id="productcatallowed" /> */}
                                        <Switch isToggled={isToggled} onToggle={()=>setisToggled(!isToggled)}/>

                                    </div>
                                </div>
                                <div className='flex mx-auto mt-2'>

                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-tailprimary text-black' onClick={handleSubmit}>SAVE</button>
                                    <button type='submit' className='m-2 font-poppins font-bold border w-full mt-2 mb-2 rounded-md py-2 bg-tailtertiary3 hover:bg-red-600 text-black' onClick={onDiscard}>DISCARD</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


