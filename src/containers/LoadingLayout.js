function LoadingLayout(){
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden
         bg-gray-200 opacity-75 flex flex-col items-center justify-center">
     
        <span className="loading loading-bars loading-lg text-primary"></span>
    </div>
    )
}

export default LoadingLayout