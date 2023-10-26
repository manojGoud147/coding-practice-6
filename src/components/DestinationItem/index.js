// Write your code here
const DestinationItem = props => {
  const {DestinationDetails} = props
  const {imgUrl, name} = DestinationDetails

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
