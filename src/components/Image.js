function Image({ src, value, suit }) {
  return <img src={src} alt={value + suit} className='pueslaimagen'></img>;
}

export default Image;
