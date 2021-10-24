export const images = [
  {
    id: '01',
    src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    alt: 'Awesome watch',
  },
  {
    id: '02',
    src: 'https://images.unsplash.com/photo-1613317447829-eea2ed59640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    alt: 'Awesome watch',
  },
  {
    id: '03',
    src: 'https://images.unsplash.com/photo-1616627561950-9f746e330187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    alt: 'Awesome watch',
  },
  {
    id: '04',
    src: 'https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
    alt: 'Awesome watch',
  },
  {
    id: '05',
    src: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    alt: 'Awesome watch',
  },
]

export const products = [
  {
    id: '1',
    name: 'Bamboo Tan',
    currency: 'USD',
    category:"Furniture",
    price: 199,
    flag: 'new',
    imageUrl:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4,
    ratingCount: 1,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '2',
    name: 'Iconic Turquoise',
    currency: 'USD',
    category:"Outdoor",
    price: 199,
    salePrice: 179.99,
    flag: 'on-sale',
    imageUrl:
      'https://images.unsplash.com/photo-1613317447829-eea2ed59640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    rating: 4,
    ratingCount: 12,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '3',
    name: 'Marble Leather',
    category:"Beddings",
    currency: 'USD',
    price: 199,
    imageUrl:
      'https://images.unsplash.com/photo-1616627561950-9f746e330187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    rating: 4,
    ratingCount: 12,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '4',
    name: 'Silve wolf',
    category:"Lighting",
    currency: 'GBP',
    price: 199,
    imageUrl:
      'https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
    rating: 5,
    ratingCount: 1,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
      id: '5',
      name: 'Silve wolf',
      currency: 'GBP',
      category:"Cookware",
      price: 199,
      imageUrl:
        'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      rating: 5,
      ratingCount: 1,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '6',
      name: 'Silve wolf',
      currency: 'GBP',
      category:"Rugs",
      price: 199,
      imageUrl:
        'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80',
      rating: 5,
      ratingCount: 1,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Product = ElementType<typeof products>
export type ProductImage = ElementType<typeof images>