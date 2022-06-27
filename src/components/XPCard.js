

const XPCard = (props) => {

    return(
        <div className="hover:rotate-2 relative h-fit rounded-md" onClick={() => window.open(props.link)}>
            <a className="absolute inset-0 z-10 rounded-md bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                <div className="p-2 w-3/4">
                    <h1 className="text-sm font-semibold" >{props.company}</h1>
                    <p  className="mx-auto text-sm">{props.title}</p>
                    <br/>
                    <p  className="mx-auto text-xs">{props.time}</p>
                </div>
                
            </a>
        <a href="#" className="relative">
            <div className="h-fit flex flex-wrap content-center">
                <img className="object-cover rounded-md" src={props.image} class="mx-auto" alt=""/>
            </div>
        </a>
  </div>
    );
}

export default XPCard;