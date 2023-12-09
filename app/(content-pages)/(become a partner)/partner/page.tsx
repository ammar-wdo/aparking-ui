import PartnerGreeting from "./(components)/greeting"
import InfoFeed from "./(components)/info-feed"
import PartnerForm from "./(components)/partner-form"


type Props = {}

const page = (props: Props) => {
  return (
    <div className=''>
      <div className='container py-12 '>
<PartnerGreeting />
<InfoFeed />
<PartnerForm />
      </div>
    </div>
  )
}

export default page