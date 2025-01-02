import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="ml-16 mt-16 md:ml-64">
        <div className="container p-4">
          <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4">
              <h3 className="text-lg font-semibold">Total Strategies</h3>
              <p className="mt-2 text-3xl font-bold">24</p>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-semibold">Active Strategies</h3>
              <p className="mt-2 text-3xl font-bold">12</p>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-semibold">Success Rate</h3>
              <p className="mt-2 text-3xl font-bold">78%</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;