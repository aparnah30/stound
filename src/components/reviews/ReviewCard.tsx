import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  role: string;
  rating: number;
  review: string;
  avatar: string;
}

const ReviewCard = ({ name, role, rating, review, avatar }: ReviewCardProps) => {
  return (
    <Card className="p-6 bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-semibold text-lg">
          {avatar}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-warning text-warning"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
        "{review}"
      </p>
    </Card>
  );
};

export default ReviewCard;