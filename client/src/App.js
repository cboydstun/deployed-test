import React, { useState, useEffect } from 'react'

export default function App() {

    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')
    const [from, setFrom] = useState('')

    const handleChange = (e) => {
        e.preventDefault()

        switch (e.target.name) {
            case 'message':
                setMessage(e.target.value)
                break
            case 'subject':
                setSubject(e.target.value)
                break
            case 'from':
                setFrom(e.target.value)
                break
            default:
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from,
                subject,
                message
            })
        }).then(res => {
            if (res.ok) {
                setMessage('')
                setSubject('')
                setFrom('')
            }
        })
    }


    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="from">From</label>
                <input type="text" name="from" id="from" value={from} onChange={handleChange} />

                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject" value={subject} onChange={handleChange} />

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" value={message} onChange={handleChange}></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
