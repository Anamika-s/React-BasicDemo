import './Second.css';

export default function Second (props)
{
  
  var name="Deepak";
  return(
    <div>
    <h2 className='rule1'> Hello from Second & {name} </h2>
    <h2 className='rule1'> Hello from Second & {props.name} 
    &nbsp; {props.address} </h2>
    </div>
  );
}

