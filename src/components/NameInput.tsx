import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NameInputProps {
  onNameSubmit: (name: string) => void;
}

const NameInput = ({ onNameSubmit }: NameInputProps) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-card p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Welcome to StudyXBuddies! 👋
        </h2>
        <p className="text-muted-foreground mb-6 text-center">
          Please enter your name to get started
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-lg"
          />
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
          >
            Start Studying
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NameInput;
