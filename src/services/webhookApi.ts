export const submitWebLead = async (data: any) => {
    const URL = 'https://n8n.isurulakshan.dev/webhookweb';
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, source: 'web_form' }),
    });
};

export const submitMobileLead = async (data: any) => {
    const URL = 'https://n8n.isurulakshan.dev/webhookMobile';
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, source: 'mobile_form' }),
    });
};

export const submitDesignLead = async (data: any) => {
    const URL = 'https://n8n.isurulakshan.dev/webhookDesign';
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, source: 'design_form' }),
    });
};
