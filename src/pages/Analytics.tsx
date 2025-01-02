import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Analytics = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="ml-16 mt-16 md:ml-64">
        <div className="container p-4">
          <h1 className="mb-6 text-3xl font-bold">Analytics</h1>
          
          <div className="grid gap-4">
            <Card className="p-4">
              <h3 className="mb-4 text-lg font-semibold">Performance Overview</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="var(--primary)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-4">
                <h3 className="text-lg font-semibold">Win Rate</h3>
                <p className="mt-2 text-3xl font-bold text-primary">68%</p>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-lg font-semibold">Profit Factor</h3>
                <p className="mt-2 text-3xl font-bold text-primary">2.4</p>
              </Card>
              
              <Card className="p-4">
                <h3 className="text-lg font-semibold">Sharpe Ratio</h3>
                <p className="mt-2 text-3xl font-bold text-primary">1.8</p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;