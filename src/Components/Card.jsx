import { FcLike, FcLikePlaceholder } from 'react-icons/fc'; 
import { toast } from 'react-toastify';

const Card = (props) => {
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    let playerIsCurrentlyLiked = likedCourses.includes(props.course.id);

    if (playerIsCurrentlyLiked) {
      // Unlike Logic
      setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
      
      toast.error(`Removed ${props.course.name} from Favourites!`);
      
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([props.course.id]);
      } else {
        setLikedCourses((prev) => [...prev, props.course.id]);
      }

      toast.success(`Added ${props.course.name} to Favourites!`);
    }
  }

  return (
    <div
      className="bg-bgDark bg-opacity-60 w-[350px] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition"
      onClick={props.onSelect}
    >
      <div className="relative">
        <img
          src={props.course.image}
          alt={props.course.name}
          className="w-full h-[200px] object-cover "
        />

        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={(e) => { e.stopPropagation(); clickHandler(); }}>
            {
              !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
            }
          </button>
        </div>
      </div>

      <div className="p-4 text-white">
        <p className="text-lg font-semibold leading-6">{props.course.name}</p>
        <p className="text-sm opacity-80">{props.course.country} • {props.course.role}</p>
        <p className="mt-2">{props.course.description}</p>
      </div>
    </div>
  );
};

export default Card;