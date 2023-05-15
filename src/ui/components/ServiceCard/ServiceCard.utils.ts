import Electricians from '../../../assets/img/electrician.webp'
import Cleaners from '../../../assets/img/cleaner.webp'
import Painters from '../../../assets/img/painter.webp'
import Gardeners from '../../../assets/img/gardener.webp'
import Plumbers from '../../../assets/img/plumber.webp'

export interface ServiceType {
  id: number
  name: string
  info: string
}

export interface resourceNameToImgType {
  [key: string]: string
}

export const resourceNameToImg: resourceNameToImgType = {
  Electricians,
  Painters,
  Cleaners,
  Gardeners,
  Plumbers,
}
