import Image from "next/image";

type AvatarProps = {
  name: string;
  picture?: string;
};

const Avatar = (props: AvatarProps) => {
  const { name, picture } = props;

  if (picture !== null) {
    return (
      <div className='flex items-center'>
        <div className='w-12 h-12 relative mr-4'>
          <Image
            src={picture}
            layout='fill'
            className='rounded-full'
            alt={name}
          />
        </div>
        <div className='text-xl font-bold'>{name}</div>
      </div>
    );
  }
};

export default Avatar;
