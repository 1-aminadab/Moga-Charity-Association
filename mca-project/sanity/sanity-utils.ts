import { createClient, groq } from "next-sanity";

export async function getProject() {
    const client = createClient({
        projectId:"lkn3qzt6",
        dataset: "production",
        apiVersion:'2023-10-24',
    });
    return client.fetch(
        groq`*[-type == "project"]{
            _id,
            _createAt,
            name,
            "slug": slug.current,
            "image":image.asset -> url,
            url,
            content

        }`
    )
}