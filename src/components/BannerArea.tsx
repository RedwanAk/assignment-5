import bannerImage from '../assets/banner-stack.png'

const BannerArea = () => {
    return (
      <div className="flex items-center justify-between container mx-auto">
        <div>

          <h2 className="text-5xl font-bold my-4">Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</span></h2>

          <p className="text-[#475569] my-3">Explore frontend, backend, database, and tooling options,<br />
            compare them side by side, and put together the stack that fits your <br />
            next project.</p>

          <div className="my-4 flex gap-3 items-center">
            <button className="btn btn-secondary bg-linear-to-r from-orange-500 to-pink-500 rounded-md text-white shadow-none border-none">Explore Technologies</button>
            <button className="btn rounded-md px-11 py-4 bg-white text-[#454E5D] ">Learn More</button>
          </div>
        </div>

        <img src={bannerImage} alt="" />

      </div>
    );
};

export default BannerArea;