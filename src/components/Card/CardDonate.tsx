export const CardDonate: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-3">
      <img src="./src/assets/donate.png" alt="donate" className="h-8 w-8 text-royal-purple" />
      <h5 className="font-medium">Donate</h5>
      <p className="text-justify">
        Donate to the shelter to help provide a home for the pets in need.
      </p>
    </div>
  );
};