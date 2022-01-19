import legacy from "./Legacy"
import { initAxios } from "./Axios"
import veeValidate from "./VeeValidate"
import clickOutside from "./ClickOutside"
import mask from "./Mask"
import swiper from "./Swiper"

const initPlugins = (app) => {
  legacy()
  initAxios(app)
  veeValidate(app)
  clickOutside(app)
  mask()
  swiper()
}

export default initPlugins
