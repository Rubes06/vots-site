import { useState } from "react";
import { Link } from "react-router-dom";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyKAuDV706Eq6VUgrBZGm46LZynw_iEYWYUHEEQqFCdnz9RxYEdVnvto5eAKrGqbeZ7LQ/exec";

function JoinVolunteer() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [ward, setWard] = useState("");
  const [zone, setZone] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsappLine, setWhatsappLine] = useState("");
  const [cda, setCda] = useState("");
  const [votersCardNumber, setVotersCardNumber] = useState("");
  const [belongsToAssociation, setBelongsToAssociation] = useState<
    "yes" | "no" | ""
  >("");
  const [associationList, setAssociationList] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!belongsToAssociation) {
      setError("Please select Yes or No for the association question.");
      return;
    }

    setSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          address,
          ward,
          zone,
          phoneNumber,
          whatsappLine,
          cda,
          belongsToAssociation,
          associationList,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      setError(
        "Something went wrong submitting your details. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex flex-col items-center justify-center bg-white gap-6 px-6 text-center">
        <p className="text-gold text-sm font-semibold tracking-widest uppercase">
          Thank You
        </p>
        <h1 className="text-3xl font-bold text-black">
          You're registered as a volunteer!
        </h1>
        <p className="text-gray-600 max-w-md">
          Thanks for joining VOTS. We'll be in touch soon.
        </p>
        <p className="text-gray-500 text-sm max-w-md">
          If you don't hear from us within a few days, please also reach out to
          us on WhatsApp at{" "}
          <span className="font-semibold text-black">07040711955</span>.
        </p>
        <Link
          to="/"
          className="bg-black text-white font-semibold px-6 py-3 rounded-md"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-white px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-gold font-medium"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-black mt-4 mb-2">
          Join Volunteers
        </h1>
        <p className="text-gray-600 mb-8">Fill in your details to join VOTS.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Full Name
            </label>
            <input
              required
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Address
            </label>
            <input
              required
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Ward
            </label>
            <input
              required
              type="text"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Zone
            </label>
            <input
              required
              type="text"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Phone Number
            </label>
            <input
              required
              type="tel"
              placeholder="+234 801 234 5678"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              WhatsApp Line
            </label>
            <input
              required
              type="tel"
              placeholder="+234 801 234 5678"
              value={whatsappLine}
              onChange={(e) => setWhatsappLine(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              CDA
            </label>
            <input
              required
              type="text"
              value={cda}
              onChange={(e) => setCda(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-1">
              Voter's Card Number
            </label>
            <input
              required
              type="text"
              value={votersCardNumber}
              onChange={(e) => setVotersCardNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Do you belong to any association? (Religious, Youth, Women)
            </label>
            <div className="flex gap-4 mb-3">
              <button
                type="button"
                onClick={() => setBelongsToAssociation("yes")}
                className={`px-5 py-2 rounded-md border font-medium ${belongsToAssociation === "yes" ? "bg-black text-white border-black" : "border-gray-300 text-gray-600"}`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setBelongsToAssociation("no")}
                className={`px-5 py-2 rounded-md border font-medium ${belongsToAssociation === "no" ? "bg-black text-white border-black" : "border-gray-300 text-gray-600"}`}
              >
                No
              </button>
            </div>

            {belongsToAssociation === "yes" && (
              <div>
                <label className="block text-sm font-semibold text-black mb-1">
                  List your association(s)
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Youth Fellowship,Women Association"
                  value={associationList}
                  onChange={(e) => setAssociationList(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            )}
          </div>

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

         <button
            type="submit"
            disabled={submitting}
            className="bg-black text-white font-semibold px-8 py-3 rounded-md mt-4 disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinVolunteer;
