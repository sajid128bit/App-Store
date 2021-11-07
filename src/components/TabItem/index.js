// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabS, changeTab} = props
  const name = activeTabS ? 'active-tab-btn' : ''
  const changeActive = () => {
    changeTab(tabDetails.tabId)
  }
  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${name}`}
        onClick={changeActive}
      >
        {tabDetails.displayText}
      </button>
    </li>
  )
}
export default TabItem
