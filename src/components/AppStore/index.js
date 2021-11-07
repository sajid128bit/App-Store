import {Component} from 'react'
import TabItem from '../TabItem/index'
import AppItem from '../AppItem/index'
import './index.css'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png',
    category: 'SOCIAL',
    url: 'https://www.facebook.com/',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png',
    category: 'SOCIAL',
    url: 'https://www.messenger.com/',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png',
    category: 'SOCIAL',
    url: 'https://www.messenger.com/',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png',
    category: 'SOCIAL',
    url: 'https://www.instagram.com/',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png',
    category: 'SOCIAL',
    url:
      'https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png',
    category: 'SOCIAL',
    url: 'https://twitter.com/?lang=en',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png',
    category: 'SOCIAL',
    url: 'https://in.pinterest.com/login/',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png',
    category: 'SOCIAL',
    url: 'https://www.wechat.com/',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png',
    category: 'SOCIAL',
    url: 'https://www.linkedin.com/login',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png',
    category: 'SOCIAL',
    url: 'https://web.telegram.org/k/',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png',
    category: 'GAMES',
    url: 'https://www.kiloo.com/subway-surfers/',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png',
    category: 'GAMES',
    url: 'https://poki.com/en/g/crossy-road',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png',
    category: 'GAMES',
    url: 'https://www.kiloo.com/subway-surfers/',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png',
    category: 'GAMES',
    url: 'https://www.angrybirds.com/games/',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png',
    category: 'GAMES',
    url: 'https://hill-climb-racing-2.en.softonic.com/',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png',
    category: 'GAMES',
    url: 'https://poki.com/en/g/temple-run-2',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png',
    category: 'GAMES',
    url: 'https://www.bluestacks.com/apps/racing/dr-driving-on-pc.html',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png',
    category: 'GAMES',
    url: 'https://games.lol/smurfs-bubble-shooter-story/',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-grade-learning.png',
    category: 'GAMES',
    url: 'https://www.abcya.com/grades/4',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/games-my-talking-tom.png',
    category: 'GAMES',
    url: 'https://outfit7.com/apps/my-talking-tom-2',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png',
    category: 'NEWS',
    url: 'https://www.inshorts.com/en/read',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png',
    category: 'NEWS',
    url: 'https://m.way2news.co/news',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png',
    category: 'NEWS',
    url: 'https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png',
    category: 'NEWS',
    url:
      'https://auth.flipboard.com/oauth2/login?login_challenge=d37bb6ba49894950968bf357d565e5b0',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-smart-news.png',
    category: 'NEWS',
    url: 'https://www.smartnews.com/en/',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png',
    category: 'NEWS',
    url: 'https://www.bbc.com/news',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png',
    category: 'NEWS',
    url: 'https://edition.cnn.com/',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png',
    category: 'NEWS',
    url: 'https://www.dailywire.com/author/daily-wire-news',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png',
    category: 'NEWS',
    url: 'https://apnews.com/',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png',
    category: 'NEWS',
    url: 'https://www.newsbreak.com/',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png',
    category: 'FOOD',
    url: 'https://www.zomato.com/login',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png',
    category: 'FOOD',
    url:
      'https://www.swiggy.com/?utm_source=Google-Sok&utm_medium=CPC&utm_campaign=google_search_sok_food_na_narm_order_web_m_web_clubbedcities_neev_brand_newuser_v2_ei_nonfocus_brand_misspells_bm&gclid=Cj0KCQjw8p2MBhCiARIsADDUFVEJsWrbol0o9S0y_epUl4JnCJNk3z1D2kBvmXGkhzqqkxJCvdERkK4aAh4rEALw_wcB',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png',
    category: 'FOOD',
    url:
      'https://pizzaonline.dominos.co.in/?src=affiliate_collectcent_333&utm_source=affiliate&utm_medium=collectcent&utm_campaign=333',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png',
    category: 'FOOD',
    url:
      'https://www.favordelivery.com/?utm_source=Google&utm_medium=cpm&utm_campaign=Favor_Google_Texas_Core_Web_BMM_Nonbrand&utm_content=order-your-local-favorites&utm_term=BMM_food-apps-that-deliver&utm_query=&campaignid=10584491417&adgroupid=103314473703&adid=449630670881&gclid=Cj0KCQjw8p2MBhCiARIsADDUFVF1CYSbkSgQkyzDWM5FK7fiS_KpTnv9aU1VWAX6pjeBTod73mtBaLoaApAzEALw_wcB',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-insta-cart.png',
    category: 'FOOD',
    url: 'https://www.instacart.com/india-bazaar',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png',
    category: 'FOOD',
    url: 'https://www.saucey.com/',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png',
    category: 'FOOD',
    url: 'https://waitrapp.com/',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png',
    category: 'FOOD',
    url: 'https://www.grubhub.com/login',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png',
    category: 'FOOD',
    url: 'https://www.mercato.com/merchant/sign-in',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png',
    category: 'FOOD',
    url: 'https://www.dotfoods.com/products/',
  },
]

// Write your code here
class AppStore extends Component {
  state = {activeTab: tabsList[0].tabId, inputG: ''}

  changeTab = tabId => {
    this.setState({activeTab: tabId})
  }

  changeInput = event => {
    this.setState({inputG: event.target.value})
  }

  render() {
    const {activeTab, inputG} = this.state
    const updatedAppList = appsList.filter(
      eachItem => eachItem.category === activeTab,
    )
    const updatedAppListFinal = updatedAppList.filter(eachItem =>
      eachItem.appName.toLowerCase().includes(inputG.toLowerCase()),
    )
    return (
      <div className="container1">
        <h1>App Store</h1>
        <div className="searchBox">
          <input
            type="search"
            placeholder="search"
            className="search"
            onChange={this.changeInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            alt="search icon"
            className="cross"
          />
        </div>
        <ul className="tabs-container">
          {tabsList.map(eachItem => (
            <TabItem
              key={eachItem.tabId}
              tabDetails={eachItem}
              activeTabS={eachItem.tabId === activeTab}
              changeTab={this.changeTab}
            />
          ))}
        </ul>
        <ul className="bottom-container">
          {updatedAppListFinal.map(eachItem => (
            <AppItem key={eachItem.appId} appItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default AppStore
