interface ProjectCardProps{
 name:string,
 techStack:string,
 date:string,
 description:string
}

export default function ProjectCard(props:ProjectCardProps){
    return (<div className="text-white w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
        <h1 className="text-white text-sm font-medium">• {props.name}</h1>
            <h1 className="text-slate-400 text-xs">{props.techStack}</h1>
        </div>
        <h1 className="text-xs text-amber-50">{props.date}</h1>
      </div>
  </div>)
}