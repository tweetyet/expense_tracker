import {
  Banknote,
  Calendar,
  Clock,
  Hamburger,
  MoreHorizontal,
} from "lucide-react";
import CalendarDay from "../components/UI/CalendarDay";
import EventCard from "../../../features/dashboard/components/UI/EventCard";
import Userprofile from "../../../features/user-profile/components/Userprofile";

const RightPanel = () => {
  return (
    <div className="space-y-8">
      <div className="bg-transparent p-6">
        <div className="flex justify-end mb-4">
          <MoreHorizontal size={20} className="text-[#44302E]" />
        </div>

        <Userprofile name="Tweety" src="/user2.jpeg" title="Financial Advisor" />
      </div>

      <div className="p-6">
        <div className="justify-between items-center mb-4 flex">
          <h3 className="text-lg font-bold text-[#43302E] ">My Agenda</h3>
          <button className="text-sm text-[#43302E] hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4 text-center mb-6 ">
          <CalendarDay day="Mon" date="12" />
          <CalendarDay day="Tue" date="13" isActive={true} />
          <CalendarDay day="Wed" date="14" />
          <CalendarDay day="Thu" date="15" />
          <CalendarDay day="Fri" date="16" />
          <CalendarDay day="Sat" date="17" />
          <CalendarDay day="Sun" date="18" />
        </div>
      </div>

      <div className="space-y-4">
        <EventCard
          title="Meeting with Team"
          time="10:00 AM - 11:00 AM"
          participants={2}
          icon={Calendar}
        />

        <EventCard
          title="lunch"
          time="12:00 PM - 1:00 PM"
          participants={2}
          icon={Hamburger}
        />

        <EventCard
          title="napping"
          time="2:00 PM - 3:00 PM"
          participants={2}
          icon={Clock}
        />
        <EventCard
          title="Investment Meeting"
          time="12:00 PM - 1:00 PM"
          icon={Banknote}
        />
      </div>

      <button className="w-full mt-6 bg-[#C1DBEB] border border-amber-200 cursor-pointer text-[#43302E] py-2 rounded-md hover:bg-[#B0D0D9] transition-colors">
        All upcoming events
      </button>
    </div>
  );
};

export default RightPanel;
