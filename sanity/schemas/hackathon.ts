import { title } from "process"

const hackathon={
    name:"hackathons",
    title:"Hackathons",
    type:"document",
    fields:[
        {name:"title",type:"string",title:"Title"},
        {name:"logo",type:"image",title:"Logo"},
        {name:"location",type:"string",title:"Location"},
        {name:"date",type:"string",title:"Date"},
        {name:"description",type:"text",title:"Description"},
        {name:"award",type:"string",title:"Award"},
        {name:"liveurl",type:"url",title:"LiveUrl"},
        { name: "order", type: "number", title: "Order" }
    ]
}

export default hackathon