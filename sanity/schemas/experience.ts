const experience= {
    name: "experience",
    title: "Exprience",
    type: "document",
    fields: [
      { name: "company", type: "string", title: "Company" },
      { name: "role", type: "text", title: "Role" },
      { name: "period", type: "string", title: "Period" },
      { name: "bullets", type: "array", title: "Bullets", of: [{ type: "string" }] },
     
    ]
  }

export default experience