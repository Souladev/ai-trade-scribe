import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="ml-16 mt-16 md:ml-64">
        <div className="container p-4">
          <h1 className="text-3xl font-bold mb-6">Features</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature cards */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Real-time Analysis</h2>
              <p className="text-muted-foreground">Advanced real-time market analysis and tracking capabilities.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Strategy Testing</h2>
              <p className="text-muted-foreground">Test your trading strategies with historical data.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Portfolio Management</h2>
              <p className="text-muted-foreground">Comprehensive portfolio tracking and management tools.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;