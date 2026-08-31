import yayiMain from "../assets/Yayi main.jpeg";
import yayi2 from "../assets/yayi2.png";
import yayi3 from "../assets/Yayi carousel/yayi3.png";
import yayi4 from "../assets/Yayi carousel/yayi4.png";
import yayi6 from "../assets/Yayi carousel/yayi6.jpeg";
import tinubu from "../assets/tinubu.jpeg";
import salisu from "../assets/salisu.jpeg";
import atobatele from "../assets/atobatele.jpeg";
import afuape from "../assets/afuape.jpeg";
import adeyemi from "../assets/adeyemi.jpeg";

const entries = [
  { image: yayiMain, action: "Vote", name: "Senator Olamilekan Solomon Adeola ", position: "Ogun State Governor" },
  { image: tinubu, action: "Re-elect", name: "Asiwaju Bola Ahmed Tinubu", position: "President, Federal Republic of Nigeria" },
  { image: yayi2, action: "Vote", name: "Senator Olamilekan Solomon Adeola ", position: "Ogun State Governor" },
  { image: salisu, action: "Re-elect", name: "Salisu Afolabi Shuaib", position: "Senator representing Ogun Central Senatorial District" },
  { image: yayi3, action: "Vote", name: "Senator Olamilekan Solomon Adeola ", position: "Ogun State Governor" },
  { image: atobatele, action: "Re-elect", name: "Lukmon Atobatele", position: "OGHA, Abeokuta South Constituency 1" },
  { image: yayi4, action: "Vote", name: "Senator Olamilekan Solomon Adeola ", position: "Ogun State Governor" },
  { image: afuape, action: "Re-elect", name: "Afolabi Afuape", position: "Abeokuta South Federal Constituency" },
  { image: yayi6, action: "Vote", name: "Senator Olamilekan Solomon Adeola ", position: "Ogun State Governor" },
  { image: adeyemi, action: "Vote", name: "Adeyemi Micheal Ademuyiwa", position: "OGHA, Abeokuta South Constituency 2" },
];

function Candidates() {
  return (
    <section id="candidates" className="py-16 px-6 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 font-inter">
        <span className="text-apc-red">Standing</span>{" "}
        <span className="text-apc-green">With Yayi</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
              <img
                src={entry.image}
                alt={entry.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4">
              <p className="text-apc-red font-semibold text-sm uppercase tracking-wide mb-1">{entry.action}</p>
              <h3 className="text-lg font-bold text-black mb-1">{entry.name}</h3>
              <p className="text-apc-green font-medium">{entry.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Candidates;