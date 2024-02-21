import { Input } from "../components/input";
import ClearDay from "../assets/clear-day.png";
import { Logo } from "../components/logo";

export function Details() {
  return (
    <div className="h-screen grid grid-cols-2 py-10 px-10 gap-10">
      <div className="space-y-4">
        <div className="flex items-center gap-5">
          <span className="text-center bg-gray-600 px-2 py-2 rounded-lg">
            <Logo />
          </span>
          <Input placeholder="Buscar local" />
        </div>
        <div className="space-y-80 bg-cover bg-clearDay rounded-lg  p-8">
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <span className="font-bold text-gray-100">Porto Alegre, RS</span>
              <span className="text-gray-100 ">
                Segunda-feira, 15 de maio de 2023
              </span>
            </div>
            <span className="font-bold text-gray-100">21:39</span>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-gray-100 text-5xl font-extrabold">28ºc</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-100 font-semibold">32ºc / 26ºc </span>
                <div className="h-2 w-2 bg-zinc-400 rounded-full"></div>
                <span className="text-gray-100 ">Poucas nuvens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500">teste2</div>
    </div>
  );
}
