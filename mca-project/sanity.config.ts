import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'
const config = defineConfig({
    projectId:"lkn3qzt6",
    dataset: "production",
    title: 'Moga Charity Association',
    apiVersion:'2023-10-24',
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{types:schemas}
})

export default config