import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectId, dataset } from "@/sanity/env";
import {schema} from '@/sanity/schema'
import experience from "./sanity/schemas/experience";
export default defineConfig({
  name: "default",
  title: "Portfolio",
  projectId,
  dataset,
  plugins: [structureTool()],
  basePath: "/studio",
  schema:{
    types:[experience]
  }
});