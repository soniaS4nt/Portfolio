interface IFormValues {
    fullName: string;
    email: string;
    message: string;
}

interface IFormErrors {
    fullName?: string;
    email?: string;
    message?: string;
}



export const validateForm = (values: IFormValues) => {
    let errors: IFormErrors = {};
    if (!values.fullName) {
        errors.fullName = 'Full name is required';
    } else if (values.fullName.length < 10) {
        errors.fullName = 'Full name must be at least 10 characters';
    } else if (values.fullName.length > 30) {
        errors.fullName = 'Full name must be less than 30 characters';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.message) {
        errors.message = 'Message is required';
    } else if (values.message.length < 10) {
        errors.message = 'Message must be at least 10 characters';
    } else if (values.message.length > 300) {
        errors.message = 'Message must be less than 300 characters';
    }

    return errors;
};


// Path: src\pages\Contact\components\ModalContact\index.tsx
// Compare this snippet from src\pages\Contact\components\ModalContact\index.tsx:
// import React, { useState } from 'react';
// import { Form, Input, TextArea, Button, Label } from './styles';
//
// const ModalContact = () => {
//     const [fullName, setFullName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         console.log(fullName, email
//             , message);
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Label htmlFor="fullName">Full Name</Label>
//             <Input   
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
                  //  onerror="this.setCustomValidity('Full name is required')"
//             />
//             <Label htmlFor="email">Email</Label>
//             <Input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             />
//             <Label htmlFor="message">Message</Label>
//             <TextArea
//                 id="message"
//                 name="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//             />
//             <Button type="submit">Send</Button>
//         </Form>
//     );
// };

