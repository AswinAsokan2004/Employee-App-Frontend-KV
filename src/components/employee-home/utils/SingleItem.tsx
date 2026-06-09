import '../../../EmployeePage.css'
function SingleItem(prop: {type: string, id: string, name: string, content: string, placeholder: string, defaultvalue: string}) {
    return (
        <>
            <div className="single-item">
                <label htmlFor={prop.content}>{prop.content}</label><br/>
                <input type={prop.type} id={prop.id} name={prop.name} placeholder={prop.placeholder} defaultValue={prop.defaultvalue}/><br/><br/>
            </div>
        </>
    )
}

export default SingleItem;