import { Metadata } from "next"
import PartnerGreeting from "./(components)/greeting"
import InfoFeed from "./(components)/info-feed"
import PartnerForm from "./(components)/partner-form"


type Props = {}



export const metadata: Metadata = {
  title: 'Partner with Aparking - Join Our Network of Parking Providers',
  description: `Become a partner with Aparking and expand your reach to a wider audience. Join our network of trusted parking providers and increase your bookings. Start a partnership with Aparking today.`,
  openGraph:{
    title:'Partner with Aparking - Join Our Network of Parking Providers',
    description:`Become a partner with Aparking and expand your reach to a wider audience. Join our network of trusted parking providers and increase your bookings. Start a partnership with Aparking today.`,
  
  }
  
}

const page = (props: Props) => {
  return (
    <div className=''>
      <div className='container py-12 '>
<PartnerGreeting />
      </div>
<InfoFeed />
<PartnerForm />
    </div>
  )
}

export default page