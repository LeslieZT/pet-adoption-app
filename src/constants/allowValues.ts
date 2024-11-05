export const petTypes = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "bird", label: "Bird" },
  { value: "rabbit", label: "Rabbit" },
  { value: "hamster", label: "Hamster" },
  { value: "fish", label: "Fish" },
];

export const genders = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
];

export const ages = [
  { value: "1-3", label: "1 - 3 Years Old" },
  { value: "4-6", label: "4 - 6 Years Old" },
  { value: "7+", label: "7+ Years Old" },
];

export const donationTiers = [
  {
    id: "life-saver",
    title: "Life Saver",
    subtitle: "Make adoption possible",
    description:
      "Your donation will help provide comprehensive support for a rescued pet, covering everything from intake to adoption. This includes food, medical treatment, spaying/neutering, microchipping, and behavioral training if needed. You'll be giving a pet the best possible chance to find a loving home'",
    amount: 10,
  },
  {
    id: "small-help",
    title: "Small Help",
    subtitle: "A little goes a long way",
    description:
      "Your donation will help cover the basic daily needs of our animals like food and fresh water. With this contribution, we can ensure that every pet in our care is fed and comfortable while they wait for their forever home.",
    amount: 25,
  },
  {
    id: "full-care",
    title: "Full Care",
    subtitle: "Give a pet a second chance",
    description:
      "Throughout this plan, you'll be covering a pet's full care package: food, vet visits, vaccinations, and any required medications. This includes support guarantees that no pet goes without the necessary attention and care they need to thrive.'",
    amount: 50,
    isPopular: true,
  },
  {
    id: "hero",
    title: "Hero of the Day",
    subtitle: "Be a hero for a pet today",
    description:
      "This plan helps provide both food and essential veterinary care for our animals. Your donation ensures that pets receive regular check-ups, vaccinations, and any immediate treatments they might need to stay healthy and adoptable",
    amount: 100,
  },
];
