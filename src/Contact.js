import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost/display_contacts.php');
                console.log("res ", response);
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <p>Name: {contact.name}</p>
                        <p>Phone: {contact.phone}</p>
                        <p>Email: {contact.email}</p>
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;
