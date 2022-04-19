import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const mobileRegex = /^(9|8|7|6)[0-9]{9}$/;
const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9_\-\+](?:[\.][a-zA-Z0-9_\-\+]+)\@(?:[a-zA-Z0-9_\-\+]+\.)+[a-zA-Z0-9_\-\+]*[a-zA-Z0-9]{2}$/;

export default function Contact() {
    const [contactInfo, setContactInfo] = useState({});

    const handleChange=(key,value) =>{
        let info = {...contactInfo};
        info[key] = value;
        setContactInfo({...info});
    }

    const handleSubmit= async() =>{
        if(Object.keys(contactInfo).length){
            let formData = {...contactInfo};
            let res = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
        }
    }

    useEffect(() => {
      console.log("aaaaaaaaaaaa")   
    },[])

    return(
        <div className="section mt-0">
            <div className="conatct-form-container">
                <div className="conatct-form-holder">
                    <div className="contact-form">
                        <div className="contact-title">Contact Us</div>
                        <div className="contact-form-row">
                            <div className="contact-input pdlr-10 pdtb-10">
                                <TextField
                                    required
                                    label="First Name"
                                    value={contactInfo.first_name || ''}
                                    onChange={(e)=> handleChange('first_name',e.target.value)}
                                />
                            </div>
                            <div className="contact-input pdlr-10 pdtb-10">
                                <TextField
                                    required
                                    label="Last Name"
                                    value={contactInfo.last_name || ''}
                                    onChange={(e)=> handleChange('last_name',e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="contact-form-row">
                            <div className="contact-input pdlr-10 pdtb-10">
                                <TextField
                                    required
                                    label="Email"
                                    value={contactInfo.email || ''}
                                    onChange={(e)=> handleChange('email',e.target.value)}
                                />
                            </div>
                            <div className="contact-input pdlr-10 pdtb-10">
                                <TextField
                                    required
                                    label="Contact No."
                                    value={contactInfo.contact || ''}
                                    onChange={(e)=> handleChange('contact',e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="contact-form-row">
                            <div className="contact-input-area">
                                <TextField
                                    required
                                    multiline
                                    rows={5}
                                    label="Message"
                                    value={contactInfo.message || ''}
                                    onChange={(e)=> handleChange('message',e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="contact-form-btn pt-4">
                            <Button
                                variant="contained"
                                endIcon={<SendIcon/>}
                                onClick={handleSubmit}
                            >
                                Submit Request
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}        