import { certifications } from "../data/certifications";
import { useState, useEffect } from "react";

const Certifications = () => {
  const [selected, setSelected] = useState(null);

  // Lock scroll when modal open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  return (
    <section
      id="certifications"
      className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Certifications
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {certifications.map((c, i) => (
          <div key={i} className="glass-glow text-center">
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-40 object-cover rounded mb-4"
            />

            <h3 className="font-semibold mb-2">
              {c.title}
            </h3>

            <button
              onClick={() => setSelected(c.image)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="
            fixed inset-0
            bg-black/70
            flex items-center justify-center
            z-[999]
          "
        >
          <img
            src={selected}
            alt="Certificate"
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              max-w-[95vw]
              rounded-lg
              shadow-2xl
            "
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;
