
interface IOption {
  value: string;
  display: React.ReactNode;
}

interface IDailyHealth {
    notes: string;
    energy: number;
    mood: "upset" | "down" | "normal" | "good" | "happy"
}