// Get all products
export const productsQuery = `
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    image,
    description,
    details,
    featured
  }
`;

// Get single product by slug
export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    category,
    price,
    image,
    description,
    details,
    featured
  }
`;