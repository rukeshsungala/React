const Footer = () => {
  return (
    <div className=" bg-orange-300 flex items-center font-bold justify-center rounded-3xl align-bottom bottom-0">
      <h4 className="p-2">Created By - Rukesh Sungala</h4>
      <a
        className="p-1"
        href="https://www.linkedin.com/in/rukesh-sungala/"
        target="_blank"
      >
        <img
          className="w-5"
          id="logo"
          src="https://tse1.mm.bing.net/th?id=OIP.YO7Fxc7mQc7rx-7pDzclCQHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121"
        ></img>
      </a>
      <i className="p-1"></i>2023
      <strong className="p-2">
        Food<span>App</span>
      </strong>
    </div>
  );
};
export default Footer;
