import Mail from '@mui/icons-material/Mail'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App';
import './InboxComponent.css'
import MailComponent from './MailComponent'
function InboxComponent() {
    
    const {selected,setIsSelected,setSearch,search,showComposeMail,setShowComposeMail,showInbox,setShowInbox,showSentMail,setShowSentMail,emailTo,setEmailTo,emailcc,setEmailcc,totalSentMail,setTotalSentMail,indexesAr,setIndexesAr,handleSubmit,showEmails,DeleteEmails}= useContext(AppContext);
         
    return (
        <div className='inboxComp'>
            <div className='top_box'>
                <p>Inbox (0)</p>
                <div className='flx'>
                <input className='search_email' placeholder='Search email'/>
                <button className='search_btn'>Search</button>
                </div>
            </div>
            <div className='mails'>
                Your Inbox is empty. Please compose a mail and check the sent Emails section
            </div>
        </div>
    )
}

export default InboxComponent
