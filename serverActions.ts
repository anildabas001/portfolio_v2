'use server';

import emailjs from 'emailjs-com';

export type FormState = {
    status: 'fail' | 'success' | '' ; 
    message: string[]
}

function validateEmail (email: string): boolean {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.toLowerCase());
}

function validateMail (senderName: string, senderEmail: string, senderMessage: string): {isValid: boolean; messages: string[]} {
    let isValid = true;
    let messages: string[] = [];

    if (!senderName) {
        messages.push("Please enter the Name.");
        isValid = false;
    }
    if (!senderMessage) {
        messages.push("Please enter your message.");
        isValid = false;
    }
    if (!validateEmail(senderEmail)) {
        messages.push("Please enter the correct email.");
        isValid = false;
    }

    return {isValid, messages};
}

export async function sendMessage(state: FormState, formData: FormData): Promise<FormState> {
    let formFields = Object.fromEntries(formData);
  
    let senderName: string = formFields.name as string;
    let senderEmail: string = formFields.email as string;
    let senderMessage: string = formFields.message as string;
  
    const { isValid, messages } = validateMail(senderName, senderEmail, senderMessage);
  
    if (!isValid) {
      return {
        status: 'fail',
        message: messages,
      };
    }
  
    const templateParams = {
      from_name: senderName + " (" + senderEmail + ")",
      to_name: "Anil Dabas",
      feedback: senderMessage,
    };
  
    const EMAILJS_API_URL = 'https://api.emailjs.com/api/v1.0/email/send';
    const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const EMAILJS_USER_ID = process.env.EMAILJS_USER_ID;
    const EMAILJS_ACCESS_TOKEN = process.env.EMAILJS_ACCESS_TOKEN;
  
    const emailData = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_USER_ID,
      accessToken: EMAILJS_ACCESS_TOKEN,
      template_params: {
        from_email: senderEmail,
        from_name: senderName + ' (' + senderEmail + ')',
        message: senderMessage,
      },
    };
  
    try {
      const response = await fetch(EMAILJS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      // Check if the response is OK (Email was sent)
      if (response.ok) {
        return {
          status: 'success',
          message: [],
        };
      } else {
        const contentType = response.headers.get('content-type');
  
        // Check if the response is JSON, otherwise read as text
        let errorMessage;
        if (contentType && contentType.includes('application/json')) {
          const errorJson = await response.json();
          errorMessage = errorJson.message || 'Unknown error occurred';
        } else {
          errorMessage = await response.text();
        }
  
        return {
          status: 'fail',
          message: ['failed to send the message.'],
        };
      }
    } catch (error: any) {
      // Handle network or other errors
      return {
        status: 'fail',
        message: ['failed to send the message'],
      };
    }
  }
  