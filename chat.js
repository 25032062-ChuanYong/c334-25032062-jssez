import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  mode: 'window',
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/0d988931-dd3b-47ff-8d8d-e8b2138738db/chat',
  title: 'JS-SEZ advisor',
  initialMessages: [
    'Hello. I can help you explore the JS-SEZ.',
    'Ask about zones, SETUP, incentives or staff mobility.'
  ],
  loadPreviousSession: false
});
