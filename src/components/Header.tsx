import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface HeaderProps {
  onNewChat: () => void;
  onNewUser: () => void;
}

const Header = ({ onNewChat, onNewUser }: HeaderProps) => {
  return (
    <header className="bg-primary py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src={logo} alt="StudyXBuddies Logo" className="h-12 w-12 object-contain" />
        
        <h1 className="text-lg md:text-xl font-semibold text-primary-foreground text-center flex-1 mx-4">
          StudyXBuddies – Your Last Minute Revision Buddy
        </h1>
        
        <div className="flex gap-2">
          <Button
            onClick={onNewChat}
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 py-2 rounded-lg transition-all"
          >
            New chat
          </Button>
          <Button
            onClick={onNewUser}
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 py-2 rounded-lg transition-all"
          >
            New User
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
