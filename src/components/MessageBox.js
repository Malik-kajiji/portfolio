import React, { useEffect, useState } from 'react';
import {MdOutlineMail,MdClose,MdOutlineSmsFailed,MdOutlineCheck} from 'react-icons/md';
import '../styles/MessageBox.scss';


const MessageBox = ({sectionMessageBtn}) => {
    const [showMessageBox,setMessageBox]=useState(false);
    const [showForm,setShowForm]=useState(false);
    const [messageData,setMessageData]=useState({name:'',email:'',message:''});
    const [errorMessage,setErrorMessage]=useState(false);
    const [loading,setLoading] = useState(false);
    const [succes,setSucces] = useState(false)
    const [fail,setFail] = useState(false)

    function handleShowForm(e){
        e.preventDefault()
        setErrorMessage(false)
        setMessageData({name:'',email:'',message:''})
        setMessageBox(prev => !prev)
        setTimeout(() => {
            setShowForm(prev => !prev)
        }, 200);
    }

    function handleChange(e){
        const {name,value} = e.target;
        setMessageData(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        const { name, email , message} = messageData;
        if(name === '' || email === '' || message === ''){
            setErrorMessage(true)
        }else {
            const scriptURL = process.env.REACT_APP_MESSAGES_URL
            const form = document.forms['messages']
            setErrorMessage(false)
            setLoading(true)
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => setSucces(true))
            .catch(error => setFail(true))
            .finally(()=> setLoading(false))
        }
    }

    return ( 
        <>
            <button className={`BTN message-Btn ${sectionMessageBtn}`} onClick={handleShowForm}>
                <p>
                    send me a message
                </p>
                <span>
                    {MdOutlineMail()}
                </span>
            </button>
            {showMessageBox && 
            <article className={`message-box ${showForm?'showen':'hidden'}`}>
                {errorMessage && <p className='TXT-normal error-message'>make sure to fill all the inputs</p>}
                {!succes && !fail && 
                <form action="" className='message-form' name='messages'>
                    <button 
                        className='close-Btn'
                        onClick={(e)=>handleShowForm(e)}
                    >{MdClose()}</button>
                    <input type="text" 
                        className='name TXT-normal'
                        name='name'
                        placeholder='Name'
                        value={messageData.name}
                        onChange={(e)=>handleChange(e)}
                    />
                    <input type="text" 
                        className='email TXT-normal'
                        name='email'
                        placeholder='Email'
                        value={messageData.email}
                        onChange={(e)=>handleChange(e)}
                    />
                    <textarea type="text" 
                        className='message TXT-normal'
                        name='message'
                        placeholder='Message'
                        value={messageData.message}
                        onChange={(e)=>handleChange(e)}
                    />
                    <button
                        className='send-Btn BTN'
                        onClick={(e)=>handleSubmit(e)}
                    >{loading?'sending....':'send'}</button>
                </form>
                }
                {succes &&
                <div className='succes'>
                    <button 
                        className='close-Btn'
                        onClick={(e)=>handleShowForm(e)}
                        >{MdClose()}</button>
                    <span className='icon'>{MdOutlineCheck()}</span>
                    <p className='TXT-normal'> your message was sent succesfully, pretty excited to work with you !!</p>
                </div>
                }
                {fail &&
                <div className='fail'>
                    <button 
                        className='close-Btn'
                        onClick={(e)=>handleShowForm(e)}
                        >{MdClose()}</button>
                    <span className='icon'>{MdOutlineSmsFailed()}</span>
                    <p className='TXT-normal'>Ooops..., something went wrong maybe you should reload the page.</p>
                </div>
                }
            </article>
        }
        </>
    );
}

export default MessageBox;