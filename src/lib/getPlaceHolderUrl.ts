export function getPlaceHolderImageUrl(imageUrl: string): string {
  return `/_next/image?url=${encodeURIComponent(imageUrl)}&q=1&w=64`;
  
}
