import Image from 'next/image'

const RootPage = () => {
    return (
        <div>
            <Image src={"/01.jpg"} width={1920} height={1281} />
            <Image src={"/02.jpg"} width={1920} height={1281} />
            <Image src={"/03.jpg"} width={1920} height={1281} />
            <Image src={"/04.jpg"} width={1920} height={1281} />
            <Image src={"/05.jpg"} width={1920} height={1281} />
            <Image src={"/06.jpg"} width={1281} height={1920} />
            <Image src={"/07.jpg"} width={1281} height={1920} />
            <Image src={"/08.jpg"} width={1281} height={1920} />
            <Image src={"/09.jpg"} width={1281} height={1920} />
            <Image src={"/10.jpg"} width={1281} height={1920} />
            <Image src={"/11.jpg"} width={1920} height={1281} />
        </div>
    );
};

export default RootPage;