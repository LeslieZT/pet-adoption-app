import { UserAvatar } from "./UserAvatar";
import { UserProfileForm } from "./UserProfileForm";

export const ProfileSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-grap lg:flex-row gap-4 md:gap-8 justify-center items-center">
      <UserAvatar />
      <UserProfileForm />
    </div>
  );
};
