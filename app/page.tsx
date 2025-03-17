'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { TransactionForm } from '@/components/TransactionForm';
import { TransactionList } from '@/components/TransactionList';
import { MonthlyExpensesChart } from '@/components/MonthlyExpensesChart';
import { Transaction } from '@/types/transaction';

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddTransaction = (transaction: Transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now().toString() }]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const handleEditTransaction = (updatedTransaction: Transaction) => {
    setTransactions(
      transactions.map(t => 
        t.id === updatedTransaction.id ? updatedTransaction : t
      )
    );
  };

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Personal Finance Tracker</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Add Transaction</h2>
              <TransactionForm onSubmit={handleAddTransaction} />
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Monthly Expenses</h2>
              <MonthlyExpensesChart transactions={transactions} />
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
            <TransactionList 
              transactions={transactions}
              onDelete={handleDeleteTransaction}
              onEdit={handleEditTransaction}
            />
          </Card>
        </div>
      </div>
    </main>
  );
}