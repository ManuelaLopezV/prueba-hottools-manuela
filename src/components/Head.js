import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <title>Happy Pets</title>
      <meta
        name="description"
        content="Bienvenidos al proyecto de gestión de mascotas."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default CustomHead;
