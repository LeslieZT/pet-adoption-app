import { Avatar } from "flowbite-react";
import { RiPencilFill } from "react-icons/ri";
import { CustomButton } from "../../components/Buttons";
import { useRef } from "react";
import { Heading, Paragraph } from "../../components/Typography";
import { useAuthStore } from "../../store/Auth.store";
import * as StorageService from "../../services/storage.service";

export const UserAvatar: React.FC = () => {
  const { user, credential, channel, updateUser } = useAuthStore((state) => state);
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
      formData.append("files", uploadedFile);
      const { data } = await StorageService.uploadFile(credential!, channel, formData);
      if (data) {
        updateUser({ avatar: data[0] });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full md:w-[300px]">
      <div className="relative mb-4">
        <Avatar
          img={user?.avatar?.url}
          size="xl"
          rounded
          className="border-2 border-solid border-lavender-purple rounded-full shadow-xl"
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
