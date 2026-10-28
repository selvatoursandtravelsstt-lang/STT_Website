export const featuredDestinations = [
  {
    name: 'Ooty',
    description: 'A hill-station destination known for tea country and mountain scenery.',
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=900&q=80',
    alt: 'Green hills and tea-country scenery near Ooty',
  },
  {
    name: 'Kodaikanal',
    description: 'A highland getaway with forest landscapes and a cool climate.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
    alt: 'Mountain landscape beneath a clear sky',
  },
  {
    name: 'Munnar',
    description: 'A scenic hill region with expansive tea plantations and winding roads.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    alt: 'Winding road through a scenic green landscape',
  },
  {
    name: 'Valparai',
    description: 'A Western Ghats destination of green slopes, forests, and tea estates.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    alt: 'Lush green forest in the Western Ghats',
  },
]

export const suggestedDestinations = [
  ...featuredDestinations,
  {
    name: 'Mysore',
    description: 'A cultural city to consider for a heritage-focused trip.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80',
    alt: 'Ornate South Indian architecture',
  },
  {
    name: 'Rameswaram',
    description: 'An island destination with coastal scenery and spiritual significance.',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=900&q=80',
    alt: 'Traditional temple architecture in South India',
  },
]

export const tourDurations = Array.from({ length: 8 }, (_, index) => ({
  days: index + 1,
  label: index === 0 ? 'One Day' : `${index + 1} Days`,
}))
