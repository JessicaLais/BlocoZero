import { FaHome, FaCalendarAlt, FaBox, FaChartBar } from 'react-icons/fa';
import blocoZeroLogoSvg from "../assets/blocoZeroLogo.svg";

export function Sidebar() {
  return (
      <aside className="w-40 h-screen bg-blue-400 text-white flex flex-col">
      <div className="flex items-center gap-3 mb-10">
        <a href="/" >
          <img src={blocoZeroLogoSvg} className='cursor-pointer'></img>
        </a>
        </div>

      <nav className="flex flex-col gap-4">
        <a href="/" className="flex items-center gap-3 p-2 bg-gray-600 transition ease-linear rounded-md font-semibold ">
          <FaHome size={20} /> 
          <span>Início</span>
        </a>

        <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-600 transition ease-linear rounded-md">
          <FaCalendarAlt size={20} /> 
          <span>Cronograma</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-600 transition ease-linear rounded-md">
          <FaBox size={20} /> 
          <span>Estoque</span>
        </a>
        <a href="#" className="flex items-center gap-3 p-2 hover:bg-gray-600 transition ease-linear rounded-md">
          <FaChartBar size={20} /> 
          <span>Relatórios</span>
        </a>
      </nav>
    </aside>
  );
}