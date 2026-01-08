# Liver Tower Lahore - AI Chat with Dr. Affan Qaiser

A modern, responsive web application that allows users to chat with an AI persona of Dr. Muhammad Affan Qaiser, a renowned Gastroenterologist and Transplant Hepatologist at Advanced GI & Liver Tower, Lahore.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdrzarak%2Flivertower&env=OPENAI_API_KEY&envDescription=OpenAI%20API%20Key%20for%20the%20AI%20chat%20functionality&envLink=https%3A%2F%2Fplatform.openai.com%2Fapi-keys&project-name=livertower&repository-name=livertower)

## Features

- **ChatGPT-style Interface**: Clean, minimalist design with real-time chat functionality
- **AI-Powered Responses**: Utilizes OpenAI's GPT-4 to provide empathetic, professional medical guidance
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Appointment Booking**: Comprehensive information about booking consultations
- **SEO Optimized**: Properly structured metadata for search engine visibility
- **Professional Branding**: Features Dr. Qaiser's credentials and Liver Tower branding

## Technology Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **API**: OpenAI GPT-4
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/drzarak/livertower.git
cd livertower
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to the `.env` file:
```
OPENAI_API_KEY=your_openai_api_key_here
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Deployment to Vercel

1. Install Vercel CLI (optional):
```bash
npm i -g vercel
```

2. Deploy using Vercel:
```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `OPENAI_API_KEY` with your OpenAI API key

4. Configure your domain (livertower.com) in Vercel:
   - Go to project settings
   - Navigate to "Domains"
   - Add your custom domain
   - Update DNS records as instructed

## Project Structure

```
livertower/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # OpenAI API integration
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page with chat and booking info
├── components/
│   └── ChatInterface.tsx         # Chat UI component
├── public/
│   └── images/                   # Images and logos
├── .env.example                  # Environment variables template
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Key Features

### AI Chatbot Persona

The AI is configured to embody Dr. Affan Qaiser's professional persona:
- Empathetic and caring tone
- First-person communication ("I")
- Provides educational health information
- Always recommends in-person consultation for serious conditions
- Directs patients to Liver Tower Lahore when appropriate

### Appointment Information

The application provides complete appointment booking details:
- Payment process and bank account information
- WhatsApp contact numbers
- Follow-up care information
- Emergency contact details

### SEO Optimization

Optimized for search engines with relevant keywords:
- Dr. Affan Qaiser
- Gastroenterologist Lahore
- Transplant Hepatologist Pakistan
- Liver specialist Lahore
- Advanced GI & Liver Tower

## Contact Information

**Advanced GI & Liver Tower**  
Ring Road near DHA Phase 5  
Lahore, Pakistan

**Emergency Contact**: +92-300-3580709

**WhatsApp Numbers**:
- +92-300-8380707
- +92-300-3580709
- +92-300-2087778

## License

Copyright © 2024 Liver Tower Lahore. All rights reserved.

## About Dr. Muhammad Affan Qaiser

**Qualifications**: MBBS, MRCPS Glasgow, FCPS Pakistan  
**Specialization**: Gastroenterology & Transplant Hepatology  
**Position**: Assistant Professor

Dr. Qaiser is a renowned medical expert who bridges medical science and society, providing state-of-the-art care at Liver Tower Lahore.