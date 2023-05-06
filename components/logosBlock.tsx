import Image from "next/image"

const LogosList = () => {
  const wrapperClassnames = "flex justify-center items-center gap-8 wrapper mr-8"
  
  return (
    <div className={wrapperClassnames}>
      <Image
        src="/partner/movebit.png"
        alt="MoveBit"
        width={30}
        height={20}
        style={{ width: 'auto', height: 'auto' }}
        className="mx-auto my-8"
      />
        <Image
        src="/logo/logo.jpeg"
        alt="MoveBit"
        width={30}
        height={30}
        style={{ width: 'auto', height: 'auto' }}
        className="mx-auto my-8"
      />
        <Image
        src="/partner/movebit.png"
        alt="MoveBit"
        width={30}
        height={20}
        style={{ width: 'auto', height: 'auto' }}
        className="mx-auto my-8"
      />
       <Image
        src="/logo/logo.jpeg"
        alt="MoveBit"
        width={30}
        height={30}
        style={{ width: 'auto', height: 'auto' }}
        className="mx-auto my-8"
      />
        <Image
        src="/partner/movebit.png"
        alt="MoveBit"
        width={30}
        height={20}
        style={{ width: 'auto', height: 'auto' }}
        className="mx-auto my-8"
      />
      <Image
        src="/logo/logo.jpeg"
        alt="MoveBit"
        width={30}
        height={20}
        style={{ width: 'auto', height: 'auto' }}
        className="mx-auto my-8"
      />
      
    </div>
  );
};

export default function LogosBlock() {
  return (
    <div className="flex mx-auto 2xl:max-w-7xl overflow-hidden">
      <LogosList />
      <LogosList />
      <LogosList />
      <LogosList />
    </div>
  );
}
