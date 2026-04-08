import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "gp7y97t3",
    dataset: "production",
    useCdn: true,
    apiVersion: "2026-04-07",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source);
}