import ReviewCard from "./ReviewCard";
const reviewsData = [{
  name: "Priya Sharma",
  role: "Software Engineer",
  rating: 5,
  review: "This platform has completely transformed how I manage my investments. The interface is intuitive and the insights are incredibly valuable for making informed decisions.",
  avatar: "PS"
}, {
  name: "Rahul Gupta",
  role: "Business Owner",
  rating: 5,
  review: "Amazing experience! The portfolio tracking features are top-notch and the real-time updates help me stay on top of my investments. Highly recommended!",
  avatar: "RG"
}, {
  name: "Anjali Patel",
  role: "Financial Analyst",
  rating: 4,
  review: "Great platform for beginners and professionals alike. The educational resources and market analysis tools have significantly improved my investment strategy.",
  avatar: "AP"
}, {
  name: "Vikram Singh",
  role: "Entrepreneur",
  rating: 5,
  review: "The seamless user experience and comprehensive features make this my go-to platform for all investment needs. Customer support is exceptional too!",
  avatar: "VS"
}, {
  name: "Meera Nair",
  role: "Doctor",
  rating: 4,
  review: "As someone new to investing, this platform made it easy to understand and start my investment journey. The guided approach is perfect for beginners.",
  avatar: "MN"
}, {
  name: "Arjun Kapoor",
  role: "Marketing Manager",
  rating: 5,
  review: "Excellent platform with robust security features. The mobile app is fantastic and allows me to monitor my portfolio on the go. Very satisfied!",
  avatar: "AK"
}];
const ReviewsSection = () => {
  return <section id="reviews" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied investors who trust our platform for their financial growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, index) => <ReviewCard key={index} name={review.name} role={review.role} rating={review.rating} review={review.review} avatar={review.avatar} />)}
        </div>
      </div>
    </section>;
};
export default ReviewsSection;