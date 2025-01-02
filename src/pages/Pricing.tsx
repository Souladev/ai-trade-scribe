import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className="ml-16 mt-16 md:ml-64">
        <div className="container p-4">
          <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Pricing tiers */}
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Basic</h2>
              <p className="text-3xl font-bold mb-4">$9<span className="text-sm font-normal">/month</span></p>
              <Button className="w-full mb-4">Get Started</Button>
              <ul className="space-y-2 text-sm">
                <li>Basic Analysis Tools</li>
                <li>5 Strategy Tests/month</li>
                <li>Basic Support</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg shadow-sm bg-primary/5">
              <h2 className="text-xl font-semibold mb-2">Pro</h2>
              <p className="text-3xl font-bold mb-4">$29<span className="text-sm font-normal">/month</span></p>
              <Button className="w-full mb-4">Get Started</Button>
              <ul className="space-y-2 text-sm">
                <li>Advanced Analysis Tools</li>
                <li>Unlimited Strategy Tests</li>
                <li>Priority Support</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
              <p className="text-3xl font-bold mb-4">$99<span className="text-sm font-normal">/month</span></p>
              <Button className="w-full mb-4">Contact Sales</Button>
              <ul className="space-y-2 text-sm">
                <li>Custom Solutions</li>
                <li>API Access</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;