import Image from "next/image";

export default function Technologies() {
  return (
    <>
      <h2 className="text-white text-2xl text-center">Tecnologías que manejo</h2>
      <div className="flex overflow-hidden">
        <div className="flex space-x-4 animate-loop-scroll">
          <Image src="/angular.svg" alt="angular-logo" width={50} height={50} />
          <Image src="/react.svg" alt="react-logo" width={50} height={50} />
          <Image src="/express.svg" alt="express-logo" width={50} height={50} />
          <Image src="/nodejs.svg" alt="nodejs-logo" width={50} height={50} />
          <Image src="/mysql.svg" alt="mysql-logo" width={50} height={50} />
          <Image src="/tailwind.svg" alt="tailwind-logo" width={50} height={50} />
          <Image src="/bootstrap.svg" alt="bootstrap-logo" width={50} height={50} />
          <Image src="/python.svg" alt="python-logo" width={50} height={50} />
          <Image src="/javascript.svg" alt="javascript-logo" width={50} height={50} />
          <Image src="/nextjs.svg" alt="nextjs-logo" width={50} height={50} />
          <Image src="/mongodb.svg" alt="mongodb" width={50} height={50}/>
        </div>
      </div>
    </>
  );
}
