"use client";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
            <div className="flex flex-col items-center gap-8">
                <div className="panda-container relative">
                    <span className="panda-loader"></span>
                    {/* Branded "A" in the middle of the panda for extra flair */}
                    <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
                        <span className="text-primary font-black text-4xl italic">A</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                    <p className="text-primary font-bold tracking-[0.3em] text-sm uppercase animate-pulse">
                        Adowise
                    </p>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    </div>
                    <p className="text-gray-400 dark:text-gray-600 text-[10px] uppercase tracking-widest mt-2">
                        Deploying Magic
                    </p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .panda-container {
          filter: drop-shadow(0 0 30px rgba(74, 108, 247, 0.15));
        }
        
        .panda-loader {
          width: 160px;
          height: 185px;
          position: relative;
          background: #fff;
          border: 6px solid #4a6cf7;
          border-radius: 90px 90px 30px 30px;
          display: block;
          overflow: hidden;
        }
        
        .panda-loader:after {
          content: "";
          position: absolute;
          width: 100px;
          height: 125px;
          left: 50%;
          top: 25px;
          transform: translateX(-50%);
          background-image: 
            radial-gradient(circle, #121723 48%, transparent 55%), /* eye L */
            radial-gradient(circle, #121723 48%, transparent 55%), /* eye R */
            radial-gradient(circle, #fff 30%, transparent 45%),    /* mouth center */
            radial-gradient(circle, #121723 48%, transparent 51%), /* mouth area */
            linear-gradient(#121723 20px, transparent 0),         /* nose bridge */
            linear-gradient(#f0f4ff 60px, transparent 0),         /* face tone */
            radial-gradient(circle, #e0e7ff 50%, transparent 51%), /* blush L */
            radial-gradient(circle, #e0e7ff 50%, transparent 51%); /* blush R */
          background-repeat: no-repeat;
          background-size: 16px 16px, 16px 16px, 10px 10px, 42px 42px, 10px 2px,
            50px 25px, 60px 60px, 60px 60px;
          background-position: 25px 10px, 55px 10px, 36px 44px, 50% 30px, 50% 88px,
            50% 50px, 50% 22px, 50% 45px;
          animation: faceLift 2.5s ease-in-out infinite alternate;
        }
        
        .panda-loader:before {
          content: "";
          position: absolute;
          width: 140%;
          height: 125px;
          left: -20%;
          top: -10px;
          background-image: 
            radial-gradient(circle, #4a6cf7 48%, transparent 50%), /* Ear L */
            radial-gradient(circle, #4a6cf7 48%, transparent 50%); /* Ear R */
          background-repeat: no-repeat;
          background-size: 60px 60px;
          background-position: 10px 12px, 155px 12px;
          animation: earLift 2.5s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes faceLift {
          0% { transform: translateX(-65%) translateY(2px); }
          100% { transform: translateX(-35%) translateY(-2px); }
        }
        
        @keyframes earLift {
          0% { transform: translateX(12px) rotate(-5deg); }
          100% { transform: translateX(-4px) rotate(5deg); }
        }
      `}} />
        </div>
    );
}
