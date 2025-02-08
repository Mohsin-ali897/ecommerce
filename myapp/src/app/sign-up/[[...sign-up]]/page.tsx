import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import { SignUp } from '@clerk/nextjs'
export default function Page() {
  return (
    <div>
        <div >
        <Navbar />
        </div>
        <div className='w-full flex justify-center items-center my-12'><SignUp /></div>
        <div>
        <Footer />
        </div>
    </div>
  )
}