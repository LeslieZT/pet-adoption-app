import { Avatar } from "flowbite-react";
import { RiPencilFill } from "react-icons/ri";
import { CustomButton } from "../../components/Buttons";
import { useRef } from "react";
import { Heading, Paragraph } from "../../components/Typography";
import { useAuthStore } from "../../store/Auth.store";

export const UserAvatar: React.FC = () => {
  const { user, setUser } = useAuthStore((state) => state);
  const fileUploadRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fileUploadRef.current) {
      fileUploadRef.current.click();
    }
  };

  const uploadImageDisplay = async () => {
    if (
      fileUploadRef.current &&
      fileUploadRef.current.files &&
      fileUploadRef.current.files.length > 0
    ) {
      const uploadedFile = fileUploadRef.current.files[0];
      const formData = new FormData();
      formData.append("file", uploadedFile);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full md:w-[300px]">
      <div className="relative mb-4">
        <Avatar
          img={user?.avatar}
          size="xl"
          rounded
        />
        <form
          onSubmit={onSubmit}
          encType="multipart/form-data"
        >
          <input
            type="file"
            id="file"
            accept="image/jpeg, image/png"
            ref={fileUploadRef}
            onChange={uploadImageDisplay}
            hidden
          />

          <CustomButton
            color="light-royal-purple-2"
            className="absolute bottom-0 right-0 w-10 h-10 rounded-full flex items-center justify-center border-none shadow-md"
            type="submit"
          >
            <RiPencilFill className="w-4 h-4" />
          </CustomButton>
        </form>
      </div>
      <Heading
        level="4"
        color="lavender-purple"
        className="font-semibold"
      >
        {user?.firstName} {user?.lastName}
      </Heading>
      <Paragraph>{user?.email}</Paragraph>
    </div>
  );
};
