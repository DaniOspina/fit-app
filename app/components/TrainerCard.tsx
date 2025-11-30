import Image from "next/image";

interface TrainerCardProps {
  name: string;
  sport: string;
  city: string;
  image: string;
}

export default function TrainerCard({ name, sport, city, image }: TrainerCardProps) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={name}
        width={400}
        height={250}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-600">{name}</h2>
        <p className="text-gray-700">{sport}</p>
        <p className="text-sm text-gray-500 mt-2">📍 {city}</p>
      </div>
    </div>
  );
}
