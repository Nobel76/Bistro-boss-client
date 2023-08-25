import img from "../../../assets/home/chef-service.jpg"
const ChefService = () => {
    return (
        <div className="mt-6 mb-24 p-2 w-[1220px] h-[333.667px] ">
            <img src={img}  alt="" />
      <div className="-mt-60 w-1/2 bg-slate-100 text-center text-white">
      <h3 className="font-bold text-yellow-600 uppercase text-4xl">Bistro Boss</h3>
            <p className="text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
        </div>
    );
};

export default ChefService;