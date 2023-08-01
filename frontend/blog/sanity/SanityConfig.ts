import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./schemas"

const config = defineConfig({
  projectId: "wa018myx",
  dataset: "production",
  title: "blogs-boiler",
  apiVersion: "2023-03-09",
  basePath: "/blog-admin-dashboard/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  useCdn: true,
})

export default config