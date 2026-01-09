import { useState } from "react";
import { useTodos } from "../hooks/useTodos"
import { ACTIONS } from "../reducer/todoReducer";

export default function TodoForm() {

    const { dispatch } = useTodos();
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })

    function handleChange(e) {

        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                id: Date.now(),
                title: formData.title,
                description: formData.description,
                completed: false
            }
        })
        setFormData({
            title: '',
            description: ''
        })
    }


    return (
        <div className='min-h-screen flex flex-row justify-center items-center'>
            <form className='w-full md:w-1/2 flex flex-col items-center space-y-4 border border-black rounded-lg p-4' onSubmit={handleSubmit}>
                <h1 className='font-bold text-2xl md:text-3xl py-4 text-center'>Add New Task</h1>
                <label className='font-bold text-xl' htmlFor="title">
                    Title
                </label>
                <input className='w-full outline-0 border border-black rounded-lg p-2' id='title' name='title' onChange={handleChange} type="text" value={formData.title} />
                <label className='font-bold text-xl' htmlFor="description">
                    Description
                </label>
                <textarea className='w-full outline-0 border border-black rounded-lg p-2' name="description" onChange={handleChange} value={formData.description} id="description"></textarea>
                <button className='rounded-lg py-4 px-8 text-white bg-blue-400 hover:bg-blue-600 hover:scale-105 transition-all ease-in-out duration-300'>Submit</button>
            </form>
        </div>
    )
}
