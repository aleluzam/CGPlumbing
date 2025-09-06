const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="ml-8">
        <img
          src="../../public/Logo.PNG"
          alt="Logo principal"
          className="w-130"
        />
      </div>
      <h1 className="barlow-condensed-extrabold text-white absolute w-200 text-center text-7xl bottom-60 -tracking-tighter italic">
        PLUMBING SOLUTIONS MULTISERVICE
      </h1>
    </div>
  );
};

export default Logo;
