import { Metadata } from "next"
import PartnerGreeting from "./(components)/greeting"
import InfoFeed from "./(components)/info-feed"
import PartnerForm from "./(components)/partner-form"
import Navigator from "@/components/navigator"


type Props = {}



export const metadata: Metadata = {
  title: 'Werk samen met Aparking - Sluit je aan bij ons netwerk van parkeeraanbieders',
  description: `Word een partner van Aparking en vergroot uw bereik naar een breder publiek. Sluit u aan bij ons netwerk van vertrouwde parkeeraanbieders en verhoog uw boekingen. Begin vandaag nog een partnerschap met Aparking.`,
  openGraph:{
    title:'Werk samen met Aparking - Sluit je aan bij ons netwerk van parkeeraanbieders',
    description:`Word een partner van Aparking en vergroot uw bereik naar een breder publiek. Sluit u aan bij ons netwerk van vertrouwde parkeeraanbieders en verhoog uw boekingen. Begin vandaag nog een partnerschap met Aparking.`,
  
  }
  
}

const page = (props: Props) => {
  return (
    <div className=''>
      <div className="p-6 bg-muted">
        <div className="container">
        <Navigator name="Partner worden" />
        </div>
        </div>
       
      <div className='container py-12 '>
    
<PartnerGreeting />
      </div>
<InfoFeed />
<PartnerForm />
    </div>
  )
}

export default page