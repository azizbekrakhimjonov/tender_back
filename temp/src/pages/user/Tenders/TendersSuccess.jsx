import { useNavigate } from "react-router-dom";

const TendersSuccess = () => {
  const navigate = useNavigate();

  const handleViewBids = () => navigate("/bids");
  const handleBrowseTenders = () => navigate("/tenders");

  return (
    <section className="min-h-screen flex items-center justify-center bg-[var(--DarkIndigo)] px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Your Bid Has Been Submitted!
        </h1>
        <p className="text-base text-[var(--LightGray)] mb-8 mt-8">
          You have successfully placed a bid on Order #ORD-48923 You will be notified if your offer is accepted.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleViewBids}
            className="w-full py-2 rounded-md bg-[var(--SoftBlue)] hover:bg-blue-600 text-white font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            View Your Bids
          </button>

          <button
            onClick={handleBrowseTenders}
            className="w-full py-2 rounded-md bg-[var(--HoverEffect)] hover:bg-[#404570] text-white font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            Continue Browsing Tenders
          </button>
        </div>
      </div>
    </section>
  );
};

export default TendersSuccess;
