import Electrician from '../assets/img/electrician.webp'
import Cleaner from '../assets/img/cleaner.webp'
import Painter from '../assets/img/painter.webp'
import Gardener from '../assets/img/gardener.webp'
import Plumber from '../assets/img/plumber.webp'

export interface Service {
  name: string
  img: string
  info: string
}

export const services: Service[] = [
  {
    name: 'Electricians',
    img: Electrician,
    info: 'Installation or repair, we have the know-how to repair. Trust us with your electrical care, for peace of mind beyond compare.',
  },
  {
    name: 'Painters',
    img: Painter,
    info: "From drab to fab, we'll give your walls some pizzazz. Let us bring color to your space, with a professional and flawless grace.",
  },
  {
    name: 'Cleaners',
    img: Cleaner,
    info: "From dust to grime, we'll make your home shine. Let us handle the cleaning chores, so you can relax and enjoy yours.",
  },
  {
    name: 'Gardeners',
    img: Gardener,
    info: "From seeds to blooms, we'll transform your garden rooms. Let us create an outdoor retreat, where nature and beauty meet.",
  },
  {
    name: 'Plumbers',
    img: Plumber,
    info: "From clogs to leaks, we have the skills to fix what wreaks. Trust us with your pipes and drains, we'll take away all your plumbing pains.",
  },
]
