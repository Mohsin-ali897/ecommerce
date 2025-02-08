import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import { SignIn } from '@clerk/nextjs'
export default function Page() {
  return (
    <div>
        <Navbar />
        <div className='w-screen h-[90vh] flex justify-center items-center'><SignIn /></div>
        <Footer />
    </div>
  )
}