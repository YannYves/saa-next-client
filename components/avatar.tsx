import Image from "next/image";

type AvatarProps = {
  name: string;
  picture?: string;
  server: string;
};

const Avatar = (props: AvatarProps) => {
  const { name, picture, server } = props;

  return (
    <div className='flex items-center'>
      <div className='w-12 h-12 relative mr-4'>
        {picture && (
          <Image
            src={`${server + picture}?auto=format,compress,enhance&w=100&h=100`}
            layout='fill'
            className='rounded-full'
            alt={name}
          />
        )}
      </div>
      <div className='text-xl font-bold'>{name}</div>
    </div>
  );
};

export default Avatar;
