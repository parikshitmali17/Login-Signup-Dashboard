export default function Input(props){
    return  <input
    type={props.type}
    id={props.id}
    class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder={props.placeholder}
    onChange={props.onChange}
    value={props.value}
    required
  />
}