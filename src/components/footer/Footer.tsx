import {
  FacebookLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-lime-100 py-0">
        <div className="container flex flex-col items-center py-4 text-green-950">
          <p className="text-xl font-bold">Reflorescer | &copy; </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <InstagramLogo size={24} weight="bold" />
            <FacebookLogo size={24} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
