import { Input } from "../components/input";
import { Logo } from "../components/logo";

export function Home() {
  return (
    <div className="flex flex-col items-center py-12 gap-40">
      <Logo title="TypeWeather" />
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-zinc-50 font-bold text-4xl">
            Boas vindas ao{" "}
            <span className="text-bluelight-600">TypeWeather</span>
          </h1>
          <span className="text-gray-200 text-xl">
            Escolha um local para ver a previsão do tempo
          </span>
        </div>

        <Input placeholder="Buscar Local" />
      </div>
    </div>
  );
}
