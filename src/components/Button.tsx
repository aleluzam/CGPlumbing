type Props = {
  children: React.ReactNode;
  handleClick?: () => void;
};

const ContactButton = (props: Props) => {
  const children = props.children;

  return (
    <div className="md:w-50">
      <a
        type="button"
        href="/contactus"
        className="bg-orange-perfect text-black sm:px-6 sm:py-4 rounded-full hover:scale-105 transition duration-300 border-black border-2 open-sans-bold text-xl sm:text-2xl inline-block px-4 py-3 "
      >
        {children}
      </a>
    </div>
  );
};

export default ContactButton;
