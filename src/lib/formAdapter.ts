/**
 * Lead Submission Adapter Architecture
 * Decouples frontend UI from the backend/form service provider (e.g. Formspree, HubSpot, Make/Zapier, Supabase).
 */

export interface LeadFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  timeline?: string;
  botCheck?: string; // Honeypot field
}

export interface SubmissionResult {
  success: boolean;
  message: string;
  submissionId?: string;
  timestamp: string;
}

export const submitLead = async (data: LeadFormData): Promise<SubmissionResult> => {
  // 1. Honeypot anti-spam check
  if (data.botCheck && data.botCheck.trim().length > 0) {
    // Silently drop spam submission
    return {
      success: true,
      message: 'Enquiry received.',
      timestamp: new Date().toISOString(),
    };
  }

  // 2. Client-side validation check
  if (!data.name || !data.email || !data.message) {
    throw new Error('Please fill in all mandatory fields.');
  }

  // 3. Simulating network interaction with graceful latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  // In production, configure an environment variable VITE_LEAD_WEBHOOK_URL
  // const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
  // if (webhookUrl) {
  //   const res = await fetch(webhookUrl, { method: 'POST', body: JSON.stringify(data) });
  //   return await res.json();
  // }

  // Local storage backup for resilient lead capture
  try {
    const existing = JSON.parse(localStorage.getItem('iwm_leads_backup') || '[]');
    existing.push({ ...data, capturedAt: new Date().toISOString() });
    localStorage.setItem('iwm_leads_backup', JSON.stringify(existing));
  } catch {
    // LocalStorage failure ignored
  }

  return {
    success: true,
    message: 'Thank you! Your enquiry has been received. Our brand strategist will connect with you within 24 hours.',
    submissionId: `IWM-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    timestamp: new Date().toISOString(),
  };
};
