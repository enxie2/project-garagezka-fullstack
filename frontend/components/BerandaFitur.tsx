'use client'

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Cepat',
      description: 'Efisiensi operasional dengan sistem digital terintegrasi untuk pengejalaan tepat waktu.',
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Terpercaya',
      description: 'Transparansi penuh pada setiap penggantian suku cadang dan detail biaya pengerjaan.',
    },
    {
      id: 3,
      icon: '👥',
      title: 'Profesional',
      description: 'Mekanik ahli dengan peralatan diagnostik terbaru untuk performa motor maksimal.',
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 rounded-lg bg-darkCard border border-gray-800 hover:border-primary transition duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
