import Nuvem from './assets/nuvem.jpg';
import Perfil from './assets/NdondaDaneilMatondo.jpg'
export function ProfileCard() {

    return  (
        <section className='bg-white min-w-[350px] max-w-[400px] min-h-[500px] shadow-xl shadow-gray-200/50 rounded-4xl p-5 flex flex-col items-center border border-gray-100'>
            {/* Banner Superior */}
            <section className='w-full h-52 rounded-3xl overflow-hidden'>
                <img src={Nuvem} alt="Nuvem" className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-700" />
            </section>
            
            {/* Foto de Perfil (Espaço reservado da tua segunda tag img) */}
            <div className="-mt-16 relative z-10">
                <img src={Perfil} alt="Avatar" className="w-32 h-32 bg-gray-100 rounded-full border-[6px] border-white shadow-sm object-cover" />
            </div>

            {/* Textos */}
            <article className="mt-4 text-center px-4">
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Ndonda Daniel Matondo</h2>
                <p className="text-gray-500 mt-2 text-sm font-medium">FULL-STACK DEVELOPER | BACKEND DEVELOPER</p>
                <p className="text-gray-500 mt-2 text-xs font-medium">Ndonda, a liderança é meu nome.</p>
            </article>

            <div className='bg-gray-50 rounded-xl min-h-[50px] w-full flex justify-evenly mt-5 py-3 border border-gray-100 shadow-sm'>
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold text-gray-800">72.9k</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Likes</p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold text-gray-800">828</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Posts</p>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-bold text-gray-800">342.9k</h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Views</p>
                </div>
            </div>
        </section>
    );
}