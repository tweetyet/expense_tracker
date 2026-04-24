import { Wallet, BarChart3, Target, Bell } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 text-center">

       
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#43302E] mb-4">
          Powerful Features to Manage Your Money 💡
        </h2>

        <p className="text-[#43302E]/70 max-w-2xl mx-auto mb-12">
          Everything you need to track, analyze, and improve your spending habits—all in one place.
        </p>

       
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

   
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Wallet className="w-10 h-10 text-[#C1DBE8] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#43302E] mb-2">
              Track Expenses
            </h3>
            <p className="text-[#43302E]/70">
              Easily log and categorize your daily spending.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <BarChart3 className="w-10 h-10 text-[#C1DBE8] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#43302E] mb-2">
              Visual Insights
            </h3>
            <p className="text-[#43302E]/70">
              Understand your finances with clean charts and reports.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Target className="w-10 h-10 text-[#C1DBE8] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#43302E] mb-2">
              Budget Goals
            </h3>
            <p className="text-[#43302E]/70">
              Set limits and stay on track with your savings goals.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Bell className="w-10 h-10 text-[#C1DBE8] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#43302E] mb-2">
              Smart Alerts
            </h3>
            <p className="text-[#43302E]/70">
              Get notified when you overspend or hit limits.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;