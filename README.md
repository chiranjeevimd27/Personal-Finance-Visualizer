# Personal-Finance-Visualizer

A simple web application for tracking personal finances, built using **Next.js, React, shadcn/ui, Recharts, and MongoDB**.

## Features

### ✅ **Stage 1: Basic Transaction Tracking**
- Add/Edit/Delete transactions (amount, date, description)
- Transaction list view
- Monthly expenses bar chart (Recharts)
- Basic form validation with error states

### ✅ **Stage 2: Categories**
- Predefined categories for transactions
- Category-wise pie chart
- Dashboard with summary cards:
  - Total expenses
  - Category breakdown
  - Most recent transactions

### ✅ **Stage 3: Budgeting & Insights**
- Set monthly category budgets
- Budget vs actual comparison chart
- Simple spending insights & recommendations

## Tech Stack
- **Frontend:** Next.js, React, shadcn/ui, Recharts
- **Backend:** MongoDB (via Mongoose)
- **Deployment:** Vercel

## Installation

### Prerequisites
- Node.js (>= 18)
- MongoDB Atlas or local MongoDB instance

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/personal-finance-visualizer.git
   cd personal-finance-visualizer
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
This project is deployed on **Vercel**. To deploy:
```bash
vercel deploy
```

## Folder Structure
```
├── components/        # Reusable UI components
├── pages/             # Next.js pages
│   ├── index.js       # Dashboard
│   ├── transactions.js # Transaction tracking
│   ├── categories.js  # Category breakdown
│   ├── budget.js      # Budgeting insights
├── lib/               # Utility functions
├── styles/            # Global styles
├── public/            # Static assets
├── package.json       # Dependencies
└── README.md          # Project documentation
```

## Future Improvements
- Advanced analytics & trend prediction
- Export transactions as CSV
- Dark mode support
----------------------------------------------------------------------------------------.


