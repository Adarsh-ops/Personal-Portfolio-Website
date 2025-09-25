export default function Input({label,placeholder}:any){

    return <div className="flex flex-col items-self-start">
        {label}
        <input type="text" placeholder={placeholder}/>
    </div>
}