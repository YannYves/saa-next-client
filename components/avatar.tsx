import Image from "next/image";

type AvatarProps = {
  name: string;
  picture?: string;
};

const Avatar = ({ name, picture }: AvatarProps) => {
  const hasPicture = picture != null;

  return (
    <div className='flex items-center'>
      <div className='w-12 h-12 relative mr-4'>
        {hasPicture ? (
          <Image
            src={picture}
            alt={name}
            width={48}
            height={48}
            layout='responsive'
            objectFit='cover'
            className='rounded-full'
          />
        ) : (
          <div
            className='rounded-full bg-gray-300'
            style={{ width: 48, height: 48 }}
          />
        )}
      </div>
      <div className='text-xl font-bold' aria-label={`Avatar of ${name}`}>
        {name}
      </div>
    </div>
  );
};

export default Avatar;
