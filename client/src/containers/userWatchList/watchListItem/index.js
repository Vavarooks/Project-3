
export default (props) => {
     {props.todos.map(({_id, completed, text})=>{
         <li key={_id}> {text}</li>
     })}
};