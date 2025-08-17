interface EmailData {
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  uploadedFile?: {
    name: string;
    size: number;
    type: string;
  };
  processDescription?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
}

// Make.com webhook URLs - Replace with your actual webhook URLs
const MAKE_WEBHOOK_AI_SCAN = 'https://hook.eu2.make.com/k80qxioeoc3y7s7xua5y277ocs62tg7g';
const MAKE_WEBHOOK_AI_SCAN_SECONDARY = 'https://hook.eu2.make.com/a0le6grrgl9e5nqaswp8clybvs9vmjhf';
const MAKE_WEBHOOK_CONTACT = 'https://hook.eu2.make.com/gg6nbpbafxbg8qqq45rzwks9lbs0dt94';

export const sendEmailNotification = async (data: EmailData): Promise<boolean> => {
  try {
    // Prepare payload for Make.com webhook
    const payload = {
      type: 'ai_scan_request',
      timestamp: new Date().toISOString(),
      client_data: {
        company: data.company,
        first_name: data.firstName,
        last_name: data.lastName,
        full_name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone || 'Niet opgegeven'
      },
      process_data: {
        uploaded_file: data.uploadedFile ? {
          name: data.uploadedFile.name,
          size: formatFileSize(data.uploadedFile.size),
          type: data.uploadedFile.type,
          size_bytes: data.uploadedFile.size
        } : null,
        process_description: data.processDescription || 'Geen procesbeschrijving opgegeven',
        has_file: !!data.uploadedFile,
        has_description: !!data.processDescription?.trim()
      },
      metadata: {
        source: 'fitflowai_website',
        page: 'ai_scan_tool',
        user_agent: navigator.userAgent,
        submission_date_nl: new Date().toLocaleString('nl-NL'),
        submission_date_iso: new Date().toISOString()
      }
    };

    console.log('🚀 Sending POST request to Make.com webhook:', MAKE_WEBHOOK_AI_SCAN);
    console.log('📊 Payload:', payload);

    // Send POST requests to both Make.com webhooks in parallel
    const [response1, response2] = await Promise.all([
      fetch(MAKE_WEBHOOK_AI_SCAN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      }),
      fetch(MAKE_WEBHOOK_AI_SCAN_SECONDARY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      })
    ]);

    console.log('✅ Primary webhook response status:', response1.status);
    console.log('✅ Secondary webhook response status:', response2.status);

    // Check if at least one webhook succeeded
    const primarySuccess = response1.ok;
    const secondarySuccess = response2.ok;

    if (primarySuccess || secondarySuccess) {
      console.log('✅ At least one webhook succeeded!');
      console.log(`📊 Primary: ${primarySuccess ? 'SUCCESS' : 'FAILED'}, Secondary: ${secondarySuccess ? 'SUCCESS' : 'FAILED'}`);
      return true;
    } else {
      console.error('❌ Both webhooks failed!');
      console.error('❌ Primary webhook status:', response1.status, response1.statusText);
      console.error('❌ Secondary webhook status:', response2.status, response2.statusText);
      
      const errorText1 = await response1.text();
      const errorText2 = await response2.text();
      console.error('❌ Primary error response:', errorText1);
      console.error('❌ Secondary error response:', errorText2);
      return false;
    }
  } catch (error) {
    console.error('❌ Network error sending POST requests to webhooks:', error);
    return false;
  }
};

// Legacy single webhook function (kept for backwards compatibility)
const sendToSingleWebhook = async (payload: any): Promise<boolean> => {
  try {
    const response = await fetch(MAKE_WEBHOOK_AI_SCAN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('✅ POST request successful! Status:', response.status);
      console.log('📨 Data successfully sent to Make.com webhook');
      return true;
    } else {
      console.error('❌ POST request failed! Status:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('❌ Error response:', errorText);
      return false;
    }
  } catch (error) {
    console.error('❌ Network error sending POST request to webhook:', error);
    return false;
  }
};

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const payload = {
      type: 'contact_form',
      timestamp: new Date().toISOString(),
      contact_data: {
        name: data.name,
        email: data.email,
        company: data.company || 'Niet opgegeven',
        phone: data.phone || 'Niet opgegeven',
        subject: data.subject,
        message: data.message
      },
      metadata: {
        source: 'fitflowai_website',
        page: 'contact_form',
        user_agent: navigator.userAgent,
        submission_date_nl: new Date().toLocaleString('nl-NL'),
        submission_date_iso: new Date().toISOString()
      }
    };

    console.log('Sending Contact Form data to Make.com:', payload);

    const response = await fetch(MAKE_WEBHOOK_CONTACT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('✅ Contact Form data successfully sent to Make.com');
      return true;
    } else {
      console.error('❌ Failed to send to Make.com:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('❌ Error sending Contact Form data to Make.com:', error);
    return false;
  }
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};