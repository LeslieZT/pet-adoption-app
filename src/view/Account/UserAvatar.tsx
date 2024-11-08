import { Avatar } from "flowbite-react";
import { RiPencilFill } from "react-icons/ri";
import { CustomButton } from "../../components/Buttons";
import { Heading, Paragraph } from "../../components/Typography";

export const UserAvatar: React.FC = () => {
  const data = {
    name: "John Doe",
    email: "john@example.com",
    imageUrl: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  };

  const { name, email, imageUrl } = data;

  const onEdit = () => {
    console.log("Edit Profile");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full md:w-[300px]">
      <div className="relative mb-4">
        <Avatar
          img={imageUrl}
          size="xl"
          rounded
        />

        <CustomButton
          color="light-royal-purple-2"
          onClick={onEdit}
          className="absolute bottom-0 right-0 w-10 h-10 rounded-full flex items-center justify-center border-none shadow-md"
        >
          <RiPencilFill className="w-4 h-4" />
        </CustomButton>
      </div>
      <Heading
        level="4"
        color="lavender-purple"
        className="font-semibold"
      >
        {name}
      </Heading>
      <Paragraph>{email}</Paragraph>
    </div>
  );
};
