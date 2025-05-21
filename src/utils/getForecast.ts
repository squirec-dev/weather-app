import { WeatherApiSuccessResponse, WeatherApiErrorResponse } from "@/types/WeatherApi";

const getForecast = async (
  q: string, 
  aqi: string = 'no',
): Promise<WeatherApiSuccessResponse | WeatherApiErrorResponse> => {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_WEATHER_API_URL}/current.json?key=${process.env.WEATHER_API_ACCESS_TOKEN}&q=${q}&aqi=${aqi}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json())

    return data

  } catch (error) {
    return error as WeatherApiErrorResponse
  }
}

export default getForecast;