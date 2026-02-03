import { createBrowserRouter } from "react-router";
import { Root } from "@/app/components/Root";
import { HomePage } from "@/app/components/HomePage";
import { DriversPage } from "@/app/components/DriversPage";
import { DriverDetailPage } from "@/app/components/DriverDetailPage";
import { ChampionshipsPage } from "@/app/components/ChampionshipsPage";
import { TracksPage } from "@/app/components/TracksPage";
import { TyresPage } from "@/app/components/TyresPage";
import { WeatherPage } from "@/app/components/WeatherPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "drivers", Component: DriversPage },
      { path: "drivers/:driverId", Component: DriverDetailPage },
      { path: "championships", Component: ChampionshipsPage },
      { path: "tracks", Component: TracksPage },
      { path: "tyres", Component: TyresPage },
      { path: "weather", Component: WeatherPage },
    ],
  },
]);
