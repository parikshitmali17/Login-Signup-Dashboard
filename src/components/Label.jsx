export default function Label(props){
    return <label class="block text-gray-700 text-sm font-semibold mb-2" for={props.for}>
 {props.name}
  </label>
}