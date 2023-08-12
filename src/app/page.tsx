import BestSelling from '@/components/bestSelling'
import Category from '@/components/category'
import FeaturedProductSlick from '@/components/featuredProductSlick'
import Hero from '@/components/hero'
import Promotion from '@/components/promotion'
import Services from '@/components/services'

export default function Home() {
  return (
   <div>
    <Hero />
    <FeaturedProductSlick />
    <Services />
    <Promotion />
    <Category />
    <BestSelling />
   </div>
  )
}
