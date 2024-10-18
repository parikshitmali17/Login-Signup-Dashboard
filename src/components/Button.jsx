export default function Button(props){
    return <div>{/*  Login Button*/}
    <button
      type={props.type}
      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
    >
      {props.value}
    </button></div>
}