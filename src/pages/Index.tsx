import { ChatBox } from "@/components/dashboard/ChatBox";
import { Chart } from "@/components/dashboard/Chart";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      
      <main className="ml-16 mt-16 md:ml-64">
        <div className="container grid gap-4 p-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Chart />
          </div>
          <div>
            <ChatBox />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;