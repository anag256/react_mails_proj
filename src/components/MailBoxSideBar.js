import React, { useContext } from 'react'
import './MailBoxSideBar.css'
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import StarRateIcon from '@mui/icons-material/StarRate';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import CircleIcon from '@mui/icons-material/Circle';
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';
function MailBoxSideBar() {
    const {selected,setIsSelected,setSearch,search,showComposeMail,setShowComposeMail,showInbox,setShowInbox,showSentMail,setShowSentMail,emailTo,setEmailTo,emailcc,setEmailcc,totalSentMail,setTotalSentMail,indexesAr,setIndexesAr,handleSubmit,showEmails,DeleteEmails,setShowSearchResults,showSearchResults}= useContext(AppContext);
    return (
        <div className='mailBoxSideBar'>
           <button onClick={()=>setShowComposeMail(!showComposeMail)} className='compose_mail_btn'>Compose Mail</button>
           <h4>FOLDERS</h4>
           <ul className='mailbox_list1'>         
        
               <li onClick={()=>{setShowComposeMail(false);setShowInbox(false);setShowSentMail(true);setShowSearchResults(false);}}><MailIcon style={{color:'slategrey',width:'16px'}}/> <span className="li_txt">Sent Mails</span></li>
               <li onClick={()=>{setShowComposeMail(false);setShowInbox(true);setShowSentMail(false);setShowSearchResults(false);}}><InboxIcon style={{color:'slategrey',width:'16px'}}/> <span className="li_txt">Inbox</span></li>
               <li><StarRateIcon style={{color:'slategrey',width:'16px'}}/> <span className="li_txt">Important</span></li>
               <li><DraftsIcon style={{color:'slategrey',width:'16px'}}/> <span className="li_txt">Drafts</span></li>
               <li><DeleteIcon style={{color:'slategrey', width:'16px'}}/> <span className="li_txt">Trash</span></li>
           </ul>
           <h4>CATEGORIES</h4>
           <ul className='mailbox_list1'>
               <li><CircleIcon style={{color:'#00b494',width:'16px'}}/> <span className="li_txt">Work</span></li>
               <li><CircleIcon style={{color:'#f2524d',width:'16px'}}/> <span className="li_txt">Documents</span></li>
               <li><CircleIcon style={{color:'blue',width:'16px'}}/> <span className="li_txt">Social</span></li>
               <li><CircleIcon style={{color:'#24cacd',width:'16px'}}/> <span className="li_txt">Advertising</span></li>
               <li><CircleIcon style={{color:'#fbb865', width:'16px'}}/> <span className="li_txt">Clients</span></li>
           </ul>
           <h4>LABELS</h4>
           <ul className='mailbox_list2'>
               <li><AttachFileSharpIcon style={{color:'slategrey',width:'16px',transform:'rotate(135deg)'}}/> <span className="li_txt">Family</span></li>
               <li><AttachFileSharpIcon style={{color:'slategrey',width:'16px',transform:'rotate(135deg)'}}/> <span className="li_txt">Work</span></li>
               <li><AttachFileSharpIcon style={{color:'slategrey',width:'16px',transform:'rotate(135deg)'}}/> <span className="li_txt">Home</span></li>
               <li><AttachFileSharpIcon style={{color:'slategrey',width:'16px',transform:'rotate(135deg)'}}/> <span className="li_txt">Children</span></li>
               <li><AttachFileSharpIcon style={{color:'slategrey', width:'16px', transform:'rotate(135deg)'}}/> <span className="li_txt">Holidays</span></li>
               <li><AttachFileSharpIcon style={{color:'slategrey',width:'16px',transform:'rotate(135deg)'}}/> <span className="li_txt">Music</span></li>
               <li><AttachFileSharpIcon style={{color:'slategrey', width:'16px', transform:'rotate(135deg)'}}/> <span className="li_txt">Photography</span></li>
               <li><AttachFileSharpIcon style={{color:'slategrey',width:'16px',transform:'rotate(135deg)'}}/> <span className="li_txt">Film</span></li>
           </ul>
        </div>
    )
}

export default MailBoxSideBar
