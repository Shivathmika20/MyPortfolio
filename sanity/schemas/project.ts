const project={
    name:"projects",
    title:"Projects",
    type:"document",
    fields:[
        {name:"title",type:"string",title:"Title"},
        {name:"description",type:"text",title:"Description"},
        {name:"tags",type:"array",title:"Tags",of: [{ type: "string" }]},
        {name:"githuburl",type:"url",title:"GithubUrl"},
        {name:"liveurl",type:"url",title:"LiveUrl"},
        { name: "order", type: "number", title: "Order" }
    ]
}

export default project