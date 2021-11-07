// Write your code here
import './index.css'

const AppItem = props => {
  const {appItem} = props
  return (
    <a href={appItem.url} target="_blank" rel="noreferrer">
      <li className="logo-container">
        <img
          src={appItem.imageUrl}
          alt={appItem.appName}
          className="logo-size"
        />
        <p className="logo-name">{appItem.appName}</p>
      </li>
    </a>
  )
}
export default AppItem
