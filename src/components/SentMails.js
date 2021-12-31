import React, { useContext, useEffect } from 'react'
import MailComponent from './MailComponent'
import './SentMails.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { AppContext } from '../App';

function SentMails() {
    const {selected,setIsSelected,setSearch,search,showComposeMail,setShowComposeMail,showInbox,setShowInbox,showSentMail,setShowSentMail,emailTo,setEmailTo,emailcc,setEmailcc,totalSentMail,setTotalSentMail,indexesAr,setIndexesAr,handleSubmit,showEmails,DeleteEmails,handleSearch,setmailsAr,flag,setFlag,setShowSearchResults,showSearchResults}= useContext(AppContext);
    useEffect(() => {
        console.log("search use effect called");
     setmailsAr(showEmails())
    }, [flag])
    return (
        <div className='sentMails'>
            <div className='top_box'>
            <p>Sent Mails ({showEmails().length})</p>
                <p>{selected.length!==0 && <DeleteIcon style={{cursor:'pointer'}} onClick={()=>{DeleteEmails(selected)}}/>}</p>
                <div className='flx'>
                <input className='search_email' placeholder='Search email' onChange={handleSearch}/>
                <button className='search_btn' >Search</button>
                </div>
            </div>
            <div className='mails'>
                {/* <MailComponent/> */}
                {!showSearchResults && showEmails().reverse()}
                {showSearchResults && search}
             
            </div>  
        </div>
    )
}

export default SentMails
