import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section className="text-white bg-black py-12" id="contact">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-bold text-pink-200 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-400 mb-8">Get in touch</p>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-8 w-8 text-pink-200" />
            <div>
              <h3 className="text-xl font-semibold">Call Me</h3>
              <p className="text-gray-400">+1 929-418-5357</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-8 w-8 text-pink-200" />
            <div>
              <h3 className="text-xl font-semibold">E-mail</h3>
              <p className="text-gray-400">nkhanhha26@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPinIcon className="h-8 w-8 text-pink-200" />
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-400">Bryn Mawr, PA, 19010</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
