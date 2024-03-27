import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { MdRestorePage } from "react-icons/md";


const Card = ({book}) => {
    const {id,name,author,total,rat,cat,tags,year, img} = book;
    return (
        <div className="p-5 ">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-[400px] h-[200px] object-cover" src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <p className="font-bold text-xl">{author}</p>
                    <div className="flex text-xl font-bold gap-10">
                        <p>{tags}</p>
                        <p>#Young Adult</p>
                        <p>#Identity</p>
                        <div>
                            <p className="flex"><CiLocationOn size={30} />
                                {year}</p>
                        </div>
                    </div>
                    <div className="flex text-xl font-bold">
                        <p className="flex"> <IoPeopleOutline size={30} />
                            </p>
                        <p className="flex"><MdRestorePage size={30}/>
                            {total}</p>
                    </div>
                    <div className="card-actions  rounded-2xl">
                        <button className="btn text-xl text-blue-300 ">category:Classic</button>
                        <button className="btn text-xl text-yellow-500   ">Rating: 4.5</button>
                        <button className="btn text-xl bg-green-600 ">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;