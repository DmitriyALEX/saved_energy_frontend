import { useState } from 'react'
import styles from './styles.module.css'
//BTNS
import SubmitBtn from '../../../../ui/Buttons/SubmitBtn'
// CONTEXT
import { useUser } from '../../../../context/userId'
//date
import { getDate } from '../../../../utils/functions/getDate'

const CreateSaved = ({ savedData, setSavedData }) => {

    const URL = import.meta.env.VITE_URL_CREATE_POST

    //context
    const { userId } = useUser()

    //date
    const date = getDate() 

    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')

    async function sendData() {
        try {
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: date,
                    title: title,
                    content: content,
                    author: userId
                })
            })
            .then(response => response.json())
            .then(data => setSavedData([...savedData, data]))
        } catch (error) {
            console.error(error)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        sendData() 
    }

    return (
        <section className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label 
                    className={styles.title_lbl}
                    htmlFor="title">
                    What do you want to save? 
                </label>
                <input 
                    type="text" 
                    id="title" 
                    placeholder="Title..."
                    onChange={(e) => setTitle(e.target.value)}
                    className={styles.title_input}
                />
                <label 
                    className={styles.content_lbl}
                    htmlFor="text">
                    &#8286;
                </label>
                <textarea
                    // style={{resize: 'none'}} 
                    rows="5"
                    cols="85" 
                    id="text" 
                    placeholder="Write something..."
                    onChange={(e) => setContent(e.target.value)}
                    className={styles.content_text}
                />
                <div className={styles.btn_container}>
                    <SubmitBtn label="Create"/>
                </div>                   
            </form>
        </section>
    )
}

export default CreateSaved