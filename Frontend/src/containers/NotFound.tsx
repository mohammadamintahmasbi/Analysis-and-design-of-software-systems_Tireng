import not_found from "../assets/images/not_found.jpg";

const NotFound = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  return (
    <div className="h-screen w-screen flex justify-center items-center text-4xl font-bold bg-white">
      <img src={not_found} height={height} width={width} alt="" />
    </div>
  );
};

export default NotFound;
