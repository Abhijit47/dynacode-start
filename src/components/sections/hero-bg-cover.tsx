export default function HeroBGCover() {
  return (
    <div
      className={
        'absolute top-0 right-0 w-full h-full z-0 overflow-hidden rounded-lg'
      }>
      <img
        src='assets/images/orig-20_result.webp'
        alt='hero-image'
        height={'100%'}
        width={'100%'}
        loading='eager'
        fetchPriority='high'
        decoding='async'
        className={'w-full h-full object-cover'}
      />
    </div>
  );
}
