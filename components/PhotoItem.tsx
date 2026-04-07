import { Photo } from "@/app/types/Photo"

type Props = {
    photo: Photo;
    onClick: () => void;
}

export const PhotoItem = ({ photo, onClick }: Props) => {
    return (
        <div 
            onClick={onClick} 
            // Adicionando 'aspect-video' para travar a proporção em 16:9 e 'bg-zinc-800' para um fundo de carregamento
            className="group relative cursor-pointer overflow-hidden rounded-md aspect-video bg-zinc-800"
        >
            <img 
                src={`/assets/${photo.url}`} 
                alt="Miniatura do vídeo" 
                // 2. Adicionando 'h-full' e 'object-cover' para a imagem preencher o espaço certinho sem distorcer
                className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-50 group-hover:scale-105"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/30">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="h-6 w-6 ml-1"
                    >
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}