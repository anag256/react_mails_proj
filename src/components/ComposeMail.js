import React, { useContext, useState } from 'react'
import { AppContext } from '../App';
import './ComposeMail.css';
function ComposeMail() {
    const {selected,setIsSelected,setSearch,search,showComposeMail,setShowComposeMail,showInbox,setShowInbox,showSentMail,setShowSentMail,emailTo,setEmailTo,emailcc,setEmailcc,totalSentMail,setTotalSentMail,indexesAr,setIndexesAr,handleSubmit,showEmails,DeleteEmails,emailSub,setEmailSub,emailBody,setEmailBody}= useContext(AppContext);
    return (
        <div className='compose_mail'>
        <form onSubmit={handleSubmit}>
          <label>TO:</label>  <input type="text" value={emailTo} onChange={(e)=>setEmailTo(e.target.value)}></input>   
          <label> CC:</label>  <input type="text" value={emailcc} onChange={(e)=>setEmailcc(e.target.value)}></input>  
          <label>Subject:</label>   <input type="text" value={emailSub} onChange={(e)=>setEmailSub(e.target.value)}></input>    
          <label>Body:</label> <input type="text" value={emailBody} onChange={(e)=>setEmailBody(e.target.value)}></input>    
          <input className='submit_btn' type='submit' value='Send Email'></input>
          </form>
        </div>
    )
}

export default ComposeMail
