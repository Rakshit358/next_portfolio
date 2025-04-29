interface ProjectCardProps{
 name:string,
 techStack:string,
 date:string,
 description:string
}

export default function ProjectCard(props:ProjectCardProps){
    return (<div className="text-white w-full flex flex-col gap-4">
      <div className="w-full border border-amber-50"></div>
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-white text-base font-semibold">{props.name}</h1>
            <h1 className="text-white text-xs">{props.techStack}</h1>
        </div>
        <h1 className="text-sm text-amber-50">{props.date}</h1>
      </div>
      <p className="text-slate-400 text-sm font-light">
        {props.description}
      </p>
  </div>)
}