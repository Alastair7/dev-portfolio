import ProfileImg from "../../assets/img/ProfileImg.jpg";

const ProfileImage = () => {
  return (
    <div className="w-24 md:w-32 lg:w-44 2xl:w-56 h-24 md:h-32 lg:h-44 2xl:h-56 px-1 py-4">
      <img
        className="size-16 md:size-24 lg:size-32 2xl:size-48 ring-2 ring-white"
        src={ProfileImg}
        alt="Profile IMG"
      />
    </div>
  );
};

export { ProfileImage };
