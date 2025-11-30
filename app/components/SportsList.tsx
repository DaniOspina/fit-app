"use client";
import Image from "next/image";

const sports = [
  {
    name: "Yoga",
    image: "https://images.unsplash.com/photo-1554306274-f23873d9a26a?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Crossfit",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Running",
    image: "https://images.unsplash.com/photo-1546484959-fb7876d4b787?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Swimming",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=60",
  },
];

export default function SportsList() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Explore Sports</h2>
      <div className="row g-4">
        {sports.map((sport, index) => (
          <div key={index} className="col-6 col-md-3 text-center">
            <div className="card shadow-sm border-0 rounded-4 p-2">
              <Image
                src={sport.image}
                alt={sport.name}
                width={300}
                height={200}
                className="rounded-4 object-fit-cover"
              />
              <div className="card-body">
                <h5 className="card-title">{sport.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
