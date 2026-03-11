import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectId, dataset } from "@/sanity/env";
import experience from "./sanity/schemas/experience";
import project from "./sanity/schemas/project";
import hackathon from "./sanity/schemas/hackathon";
export default defineConfig({
  name: "default",
  title: "Portfolio",
  projectId,
  dataset,
  plugins: [structureTool()],
  basePath: "/studio",
  schema:{
    types:[experience,project,hackathon]
  }
});