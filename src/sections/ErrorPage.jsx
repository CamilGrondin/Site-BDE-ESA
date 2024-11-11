import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                Erreur, cette page n&apos;existe pas
            </p>
            <Link to="/" className="px-6 py-3 btn text-white rounded-md hover:bg-blue-700 transition duration-300">
                Retour à l&apos;accueil
            </Link>
      </div>
    </section>
  )
}

export default ErrorPage