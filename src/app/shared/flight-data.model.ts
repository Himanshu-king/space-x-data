export interface FlightData {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_success: boolean;
  land_success?: any;
  image_link: string
}