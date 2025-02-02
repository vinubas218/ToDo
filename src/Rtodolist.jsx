import React, { useEffect, useState } from 'react'
import { GrEdit } from "react-icons/gr";
import { AiTwotoneDelete } from "react-icons/ai";
import './Rtodolist.css'
import { TiTick } from "react-icons/ti";

const Rtodolist = () => {
    const [inputtext, setInputText] = useState('')
    const [inputItems, setInputItems] = useState(['Edit project video', 'Upload project video', 'Record New Video', 'Catch bus on time', 'To go temple'])
    const [editVlue, setEditVlue] = useState("")
    const [updtedEditVlue, setUpdtedEditVlue] = useState("")
    const [tasks, setTasks] = useState([])

    const ooo = () => {
        setInputItems([...inputItems, inputtext])
        console.log(inputItems);
        setInputText('')
    }

    const remove = (index) => {
        const rem = inputItems.filter((items, ind) => ind !== index)
        console.log(rem)
        setInputItems(rem)
    }
    const updte = (index) => {


        const updtedVlue = inputItems.map((item, ind) => {
            if (index === ind) {
                return updtedEditVlue
            }

            return item
        })
        setInputItems(updtedVlue)
        setEditVlue("")
        setUpdtedEditVlue("")




    }
    return (
        <div className='todo'>
            <h3 className='heading'>ToDo List</h3>
            <div className='input-container'>
                <input type="text" placeholder='Add your task' onChange={(e) => setInputText(e.target.value)} value={inputtext} className='input' />
                <button onClick={ooo} className='btn'>+</button>

            </div>

            <div className='txt-box'>
                {
                    inputItems.map((input, index) => (
                        <div className='it'>
                            {
                                editVlue && editVlue === input ?

                                    <div className="">
                                        <input type="text" placeholder='Add your task' onChange={(e) => setUpdtedEditVlue(e.target.value)} value={updtedEditVlue} className='input' />

                                        <button onClick={() => updte(index)} className='upd'>Update</button>
                                    </div>
                                    :
                                    <p className={` ${tasks.includes(index) ? "dddd" : ""}`} key={index} >{input}</p>


                            }


                            <div className={'btn-group '}>
                                <p onClick={() => setTasks([...tasks, index])} ><TiTick /></p>
                                <p onClick={() => { setEditVlue(input); setUpdtedEditVlue(input) }} ><GrEdit /></p>
                                <p onClick={() => remove(index)} ><AiTwotoneDelete /></p>

                            </div>



                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default Rtodolist
