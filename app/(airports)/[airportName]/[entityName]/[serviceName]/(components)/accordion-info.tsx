import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/editor"), { ssr: false });
import {
  Banknote,
  BatteryChargingIcon,
  Bus,
  Car,
  CheckCircle,
  CreditCard,
  HelpCircle,
  Info,
  KeyIcon,
  Loader,
  ParkingCircle,
  Star,
  Warehouse,
} from "lucide-react";

type Props = {
  label: string;
  editorContent?: string;
  facilities?: string[];
  timeToAirport?: number;
  distanceToAirport?: number;
  first?: boolean;
  highlights?: {
    label: string;
    icon: string;
  }[];

  location?: { address: string; zipcode: string,country:string };
  id:string,
};

const theIcons: { [key: string]: React.ReactNode } = {
  car: <Car className="w-5 h-5 " />,
  bus: <Bus className="w-5 h-5 " />,
  key: <KeyIcon className="w-5 h-5 " />,
  info: <Info className="w-5 h-5 " />,
  check: <CheckCircle className="w-5 h-5 " />,
  star: <Star className="w-5 h-5 " />,
  electric: <BatteryChargingIcon className="w-5 h-5 " />,
  payment: <CreditCard className="w-5 h-5 " />,
  cash: <Banknote className="w-5 h-5 " />,
  parking: <ParkingCircle className="w-5 h-5 " />,
  indoor: <Warehouse className="w-5 h-5 " />,
};

const AccordionInfo = ({
  editorContent,
  facilities,
  label,
  timeToAirport,
  distanceToAirport,
  first,
  highlights,
  location,
  id

}: Props) => {
  return (
 
      <AccordionItem value={id}>
        <AccordionTrigger
          className={cn("hover:no-underline py-8 font-bold px-4 hover:bg-gray-100 transition", first && " border-t")}
        >
          {label}
        </AccordionTrigger>
        <AccordionContent className="px-4 py-2">
          {editorContent && <Editor initialContent={editorContent} />}
          {timeToAirport && distanceToAirport && (
            <div className="mt-4 font-semibold">
              <p>Time to ariport: {timeToAirport}</p>
              <p>Distance to airport: {distanceToAirport}</p>
            </div>
          )}
          {facilities && (
            <div className="flex flex-col gap-1 font-semibold ">
              {facilities.map((content) => (
                <p className="first-letter:capitalize" key={content}>
                  {content}
                </p>
              ))}
            </div>
          )}
          {highlights && (
            <div className="flex flex-col gap-1 ">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="flex items-center gap-2 text-gray-500"
                >
                  <span>{theIcons[highlight.icon]}</span>
                  <p>{highlight.label}</p>
                </div>
              ))}
            </div>
          )}

          {location && <div>
            <p>Country: {location.country}</p>
            <p>Address: {location.address}</p>
            <p>Zipcode: {location.zipcode}</p>
            </div>}
        </AccordionContent>
      </AccordionItem>

  );
};

export default AccordionInfo;
