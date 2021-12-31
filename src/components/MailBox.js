import Inbox from '@mui/icons-material/Inbox'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AppContext } from '../App'
import ComposeMail from './ComposeMail'
import InboxComponent from './InboxComponent'
import './MailBox.css'
import MailBoxSideBar from './MailBoxSideBar'
import MailComponent from './MailComponent'

import SentMails from './SentMails'

function MailBox() {
  const {selected,setIsSelected,setSearch,search,showComposeMail,setShowComposeMail,showInbox,setShowInbox,showSentMail,setShowSentMail,emailTo,setEmailTo,emailcc,setEmailcc,totalSentMail,setTotalSentMail,indexesAr,setIndexesAr,handleSubmit,showEmails,DeleteEmails,setShowSearchResults,showSearchResults}= useContext(AppContext);
    return (
       
        <div className='mailBox'>
            <MailBoxSideBar />
            { showInbox && 
            <InboxComponent />
            }
            {
                showSentMail  && <>
                <SentMails/>
               
                </> 
            
            }
            {showComposeMail && <ComposeMail/>}
        </div>
        
    )
}

export default MailBox
