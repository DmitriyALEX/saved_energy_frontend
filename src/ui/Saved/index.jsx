import {  useState, useEffect, Fragment } from 'react'
import styles from './styles.module.css'

import SubNavigationBtn from "../Buttons/SubNavigationBtn"
import DeleteSaved from '../../components/UserSide/UserSaved/DeleteSaved'

const Saved = ({ savedData }) => {

    //TEXT CONTENT
    //checkLINKS
    const checkLink = (text) => {
        // eslint-disable-next-line no-useless-escape
        let regExp = /https?:\/\/(www\.)?[-\w@:%\.\+~#=]{1,256}\.[a-z0-9()]{1,6}\b([-a-z0-9()@:%_\+.~#?&]*)/i
        const checkedLink  = regExp.test(text)
        
        if(checkedLink) {
            return <a 
                className={styles.content_item_text}
                href={text}
            >{text.length > 50 ? text.slice(0, 100) :  text}</a>
        } else {
            return null
        }  
    }

    //shift lines
    const shiftTextLine = (text) => {
        return text.split('\n').map((line, idx) => (
            <Fragment key={idx}>
                {checkLink(line) === null 
                ?   <span className={styles.content_item_text}>
                        {line}
                        <br/>
                    </span> 
                : checkLink(line)}
            </Fragment>
        ))
    }

    //reverse post items(first render and else)
    useEffect(() => {
        setRenderedData([...savedData].reverse())
    }, [savedData])

    //render array
    const [ renderedData, setRenderedData ] = useState([])

    //handle reverse
    function handleReversedData() {
        setRenderedData([...renderedData].reverse())
    }

    return (
        <main className={styles.content_container}>
            <div className={styles.reversed}>
                <SubNavigationBtn label="⥮⇅" onClick={handleReversedData}/>
            </div>
            {renderedData.map((item) => (
                <section key={item._id} className={styles.content_item_container}>
                    <div className={styles.content_item_title}>
                        {item.title}
                        {/* DELETE POST BUTTON */}
                        <DeleteSaved 
                            renderedData={renderedData} 
                            setRenderedData={setRenderedData}
                            postId={item._id}
                        />
                    </div>
                    <section>
                        <div className={styles.content_item_text_container}>
                            {shiftTextLine(item.content)}
                        </div>
                    </section>
                    <span className={styles.content_item_date}>{item.date}</span>
                </section>    
            ))}   
        </main>
    )
}

export default Saved