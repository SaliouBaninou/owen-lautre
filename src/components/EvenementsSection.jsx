const EventCard = ({ color, label, title, image, description }) => (
  <div className="w-96 h-max rounded-2xl p-6 bg-[#F6FAFB] hover:shadow-lg transition-shadow duration-300">
    <div className="mb-4">
      <span className={`${color}`}>{label}</span>
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
    {image ? (
      <div className="h-72 w-full overflow-hidden">
        <img
          className="h-full w-full object-contain"
          src={image}
          alt={`Illustration pour ${title}`}
        />
      </div>
    ) : (
      <p className="text-gray-500">{description}</p>
    )}
  </div>
);

const EvenementsSection = () => {
  return (
    <section className="w-full p-10 relative">
      <div className="flex flex-col justify-center items-center gap-4 mt-4 text-center">
        <h2 className="text-gray-900 font-bold text-5xl">Evènements et dates</h2>
        <p className="text-gray-500 text-xl max-w-3xl">
          Je t’aime non seulement pour ce que tu es, mais pour ce que je suis quand nous sommes ensemble.
        </p>
      </div>

      <div className="mt-20 grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <EventCard
          color="text-[#CE6D4A]"
          label="Date"
          title="Calendrier"
          image="/photo.jpg"
        />
        <EventCard
          color="text-[#2D8FB9]"
          label="Images souvenir"
          title="Photos"
          image="/photo.jpg"
        />
        <EventCard
          color="text-blue-600"
          label="Histoire"
          title="Rencontre"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero adipisci quia numquam? Nobis consectetur suscipit, sunt fugit odio voluptatem minus pariatur velit error asperiores labore ducimus sint adipisci commodi dignissimos!"
        />
        <EventCard
          color="text-pink-500"
          label="Vision"
          title="Objectif"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero adipisci quia numquam? Nobis consectetur suscipit, sunt fugit odio voluptatem minus pariatur velit error asperiores labore ducimus sint adipisci commodi dignissimos!"
        />
      </div>
    </section>
  );
};

export default EvenementsSection;
