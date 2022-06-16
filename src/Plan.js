function Plan(props){
    return<>
    <li className="shadow p-2 m-2 col-sm-8">{props.value}</li>
    <button className="btn btn-danger my-2 col-sm-2 offset-1">X</button>
    </>
}

export default Plan;