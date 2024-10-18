export default function Avatar(props){
    return  <div className="flex items-center">
    <img
      src={props.imgSrc}
      alt="User Avatar"
      className="w-10 h-10 rounded-full mr-2"
    />
    <span>{props.NameOfUser}</span>
  </div>
}