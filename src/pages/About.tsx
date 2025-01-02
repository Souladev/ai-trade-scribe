import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="ml-16 mt-16 md:ml-64">
        <div className="container p-4">
          <h1 className="text-3xl font-bold mb-6">About BackTester</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg mb-4">
              BackTester is a powerful platform designed to help traders and investors test and optimize their trading strategies using historical market data.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="mb-4">
              To provide traders with the most accurate and reliable backtesting tools, enabling them to make data-driven decisions and improve their trading performance.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Advanced backtesting engine</li>
              <li>Real-time market data</li>
              <li>Professional-grade analytics</li>
              <li>Dedicated support team</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;