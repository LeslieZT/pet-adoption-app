import { MdOutlineArrowOutward, MdOutlinePets, MdConnectWithoutContact } from "react-icons/md";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { TbHomeHeart } from "react-icons/tb";
import { CustomButton } from "../components/Buttons";
import { SubTitle } from "../components/Typography";
import { Paragraph } from "../components/Typography/Paragraph";
import { Gallery } from "../components/Home";
import { CardAdopt } from "../components/Card";

const HomePage: React.FC = () => {
  return (
    <main className="mx-auto max-w-screen-2xl">
      <section
        id="home"
        className="px-4 py-8 md:py-20 grid md:grid-cols-2 gap-6 md:gap-10 xl:gap-20"
      >
        <div className="flex flex-col items-start justify-center gap-6 md:gap-8">
          <SubTitle className="text-justify md:text-left">
            Find Out Which Furry Friend Fits You Best!
          </SubTitle>
          <Paragraph className="text-justify">
            Take a stroll through our furry family and uncover the ideal companion that perfectly
            matches your lifestyle and personality. Whether you're seeking a playful pal for outdoor
            adventures or a cuddly companion for cozy nights in, our diverse selection of pets
            awaits your discovery.
          </Paragraph>

          <CustomButton className="py-2 w-60 hidden md:block btn-primary">
            Explore Pets <MdOutlineArrowOutward className="ml-2 h-5 w-5" />
          </CustomButton>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <Gallery />
          <CustomButton className="mt-4 py-2 w-48 md:hidden">
            Explore Pets <MdOutlineArrowOutward className="ml-2 h-5 w-5" />
          </CustomButton>
        </div>
      </section>

      <section
        id="adopt"
        className="px-4 py-8 md:py-20 grid md:grid-cols-2 gap-6 md:gap-10 xl:gap-20"
      >
        <div className="order-last md:order-first">
          <img
            src="/src/assets/adopt.png"
            alt="Cat being petted"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-6 md:gap-8">
          <SubTitle className="text-justify md:text-left">How to Adopt Your New Friend</SubTitle>
          <Paragraph className="text-justify">
            Ready to bring home your new best friend? Explore, meet, adopt, and start your journey
            of love and joy today!.
          </Paragraph>
          <div className="grid grid-cols-2 gap-4">
            <CardAdopt
              icon={<MdOutlinePets className="h-8 w-8 text-royal-purple" />}
              title="Find Pet Match"
              description="Explore our website and find the perfect pet that steals your heart."
            />
            <CardAdopt
              icon={<MdConnectWithoutContact className="h-8 w-8 text-royal-purple" />}
              title="Contact and Meet"
              description="Contact the shelter to meet the pet and see if it's a match."
            />
            <CardAdopt
              icon={<HiMiniClipboardDocumentList className="h-8 w-8 text-royal-purple" />}
              title="Complete Paperwork"
              description="Complete the application and fee to finalize adoption."
            />
            <CardAdopt
              icon={<TbHomeHeart className="h-8 w-8 text-royal-purple" />}
              title="Take Them Home"
              description="Bring your new furry friend home and start making memories together!"
            />
          </div>
        </div>

      </section>

      <section
        id="donate"
        className="px-4 py-8 md:py-20 flex flex-col items-center justify-center gap-6 md:gap-8"
      >
        <SubTitle className="text-justify md:text-left">Donate and Save Lives</SubTitle>
        <Paragraph className="text-center max-w-3xl">
          Your donation can make a life-saving difference. Join us in our mission to rescue, care
          for, and rehome pets in need rescue, care for, and rehome pets in need by contributing
          today.
        </Paragraph>
        <div className="flex flex-grap gap-4">
        <CardAdopt
              icon={<TbHomeHeart className="h-8 w-8 text-royal-purple" />}
              title="Take Them Home"
              description="Bring your new furry friend home and start making memories together!"
            />
            <CardAdopt
              icon={<TbHomeHeart className="h-8 w-8 text-royal-purple" />}
              title="Take Them Home"
              description="Bring your new furry friend home and start making memories together!"
            />
            <CardAdopt
              icon={<TbHomeHeart className="h-8 w-8 text-royal-purple" />}
              title="Take Them Home"
              description="Bring your new furry friend home and start making memories together!"
            />

        </div>
      </section>
    </main>
  );
};

export default HomePage;
