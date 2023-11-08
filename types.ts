export type Service = {
    id :string,
    companyId :string,
    createdAt :Date,
    updatedAt :Date,
    spots  :number,
    isActive :boolean
  
    address:string,
    arrivalTodos? :string
    city :string,
    departureTodos?:string
    description:string,
    distanceToAirport?:string
    facilities :string[]
    importantInfo ?:string
    latitude   :string,
    logo       :string,
    images  :string[]
    longitude :string
    parkingType :'shuttle' | 'valet'
    timeToAirport ?:string,
    title :string
    zipcode  :string,
    company  :any,
    available:boolean,
    airports :any[] 
}



export type Booking = {

    id :string,
  createdAt :Date,
  updatedAt :Date,
  BookingOnBusinessName?:string
  ExtraServiceFee :number,
  Status        :string
  arrivalTime   :string
  departureTime :string
  address?:string
  arrivalDate   :Date,
  bookingCode   :string,  
  carColor      :string,
  carLicense    :string,
  carModel      :string,
  companyName ?:string,
  // customerId   :string,
  serviceId:string,
  
  daysofparking :Date,
  departureDate :Date,
  discount  :number
  flightNumber ?:number

  parkingPrice :number,
  paymentStatus         :string
  paymentmethod         :" MASTER_CARD" | " VISA_CARD" | "AMERICAN_EXPRESS" | "PAYPALL"
  place?:string,
  returnFlightNumber?:number
  total  :string,
  vatNumber?:number
  zipcode?:string,
  customer  :any
  payment  :any[]

}